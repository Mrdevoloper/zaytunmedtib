import { NextFunction, Request, Response } from "express"
import { dataSource } from "../config/ormconfig"
import { services } from "../entities/services.entity"
export const  serviceController = {
    GET: async(req:Request, res:Response, next:NextFunction) => {
        try {
            const getservices = await dataSource.getRepository(services).find()
            res.json(getservices)
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
            .into(services)
            .values({service_title: title, service_desc: desc, service_lang:lang, service_img: img})
            .returning(['services_id', 'service_title'])
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
        .update(services)
        .set({service_title: title, service_desc: desc, service_lang:lang, service_img: img})
        .where("services_id = :id", {id})
        .returning(["services_id", "service_title"])
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
        .from(services)
        .where("services_id = :id", {id})
        .returning(["services_id", "service_title"])
        .execute()

        res.json(raw)
     } catch (error) {
        next(error)
    }
},
}