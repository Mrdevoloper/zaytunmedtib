import { NextFunction, Request, Response } from "express"
import { dataSource } from "../config/ormconfig"
import { courses } from "../entities/courses.entity"
export const CourseController = {
    GET: async(req:Request, res:Response, next:NextFunction) => {
        try {
            const getCourses = await dataSource.getRepository(courses).find()
            res.json(getCourses)
        } catch (error) {
            next(error)   
        }
    },
    POST: async(req:Request, res:Response, next:NextFunction) => {
        try {
            const {title, desc, lang, img } = req.body
            const {raw} = await dataSource
            .createQueryBuilder()
            .insert()
            .into(courses)
            .values({course_title: title, course_desc: desc, course_lang:lang, course_img: img})
            .returning(['course_id', 'course_title'])
            .execute()
            res.json(raw)
         } catch (error) {
            next(error)
         }
   },
  
   PUT: async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params
        const {title, desc, lang, img } = req.body
        const {raw} = await dataSource
        .createQueryBuilder()
        .update(courses)
        .set({course_title: title, course_desc: desc, course_lang:lang, course_img: img})
        .where("course_id = :id", {id})
        .returning(["course_id", "course_title"])
        .execute()
  
        res.json(raw)
     } catch (error) {
        next(error)
    }
  },
  
  DELETE: async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params
        const {raw} = await dataSource
        .createQueryBuilder()
        .delete()
        .from(courses)
        .where("course_id = :id", {id})
        .returning(["course_id", "course_title"])
        .execute()
  
        res.json(raw)
     } catch (error) {
        next(error)
    }
  },
}