import { NextFunction, Request, Response } from "express"
import { dataSource } from "../config/ormconfig"
import { courseusers } from "../entities/courseusers.entity"
export const CourseuserController = {
    GET: async(req:Request, res:Response, next:NextFunction) => {
        try {
            const getCourseusers = await dataSource.getRepository(courseusers).find()
            res.json(getCourseusers)
        } catch (error) {
            next(error)
        }
    },

    POST: async(req:Request, res:Response, next:NextFunction) => {
        try {
            const {fullname, phone } = req.body
            const {raw} = await dataSource
            .createQueryBuilder()
            .insert()
            .into(courseusers)
            .values({user_full_name:fullname, user_phone:phone})
            .returning(['user_id', 'user_full_name'])
            .execute()
            res.json(raw)
         } catch (error) {
            next(error)
         }
   },
  
   PUT: async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params
        const {fullname, phone} = req.body
        const {raw} = await dataSource
        .createQueryBuilder()
        .update(courseusers)
        .set({user_full_name:fullname, user_phone:phone})
        .where("user_id = :id", {id})
        .returning(["user_id", "user_full_name"])
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
        .from(courseusers)
        .where("user_id = :id", {id})
        .returning(["user_id", "user_full_name"])
        .execute()
  
        res.json(raw)
     } catch (error) {
        next(error)
    }
  },

}