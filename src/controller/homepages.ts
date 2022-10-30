import { NextFunction, Request, Response } from "express"
import { dataSource } from "../config/ormconfig"
import { HomePage } from "../entities/homepages.entity"

export const HomePageController = {
    GET: async(req:Request, res:Response, next:NextFunction) => {
         try {
            const gethomepage = await dataSource
            .getRepository(HomePage)
            .find()
            res.json(gethomepage)
         } catch (error){
            next(error)
         }
    },
    POST: async(req:Request, res:Response, next:NextFunction) => {
        try {
            const {title, desc, lang, img } = req.body
            const {raw} = await dataSource
            .createQueryBuilder()
            .insert()
            .into(HomePage)
            .values({home_title: title, home_desc: desc, home_lang:lang, home_img: img})
            .returning(['home_id', 'home_title'])
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
        .update(HomePage)
        .set({home_title:title, home_desc:desc, home_lang:lang, home_img:img})
        .where("home_id = :id", {id})
        .returning(["home_id", "home_title"])
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
        .from(HomePage)
        .where("home_id = :id", {id})
        .returning(["home_id", "home_title"])
        .execute()

        res.json(raw)
     } catch (error) {
        next(error)
    }
},

}