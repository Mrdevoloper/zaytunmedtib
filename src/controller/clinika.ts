import { NextFunction, Request, Response } from "express"
import { dataSource } from "../config/ormconfig"
import { Clinika } from "../entities/clinika.entity"

export const  ClinikaController = {
    GET: async(req:Request, res:Response, next:NextFunction) => {
      try {
        const getclinikaInfo = await dataSource.getRepository(Clinika).find()
        res.json(getclinikaInfo)
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
          .into(Clinika)
          .values({clinika_title: title, clinika_desc: desc, clinika_lang:lang, clinika_img: img})
          .returning(['clinika_id', 'clinika_title'])
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
      .update(Clinika)
      .set({clinika_title: title, clinika_desc: desc, clinika_lang:lang, clinika_img: img})
      .where("clinika_id = :id", {id})
      .returning(["clinika_id", "clinika_title"])
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
      .from(Clinika)
      .where("clinika_id = :id", {id})
      .returning(["clinika_id", "clinika_title"])
      .execute()

      res.json(raw)
   } catch (error) {
      next(error)
  }
},
}