import { NextFunction, Request, Response } from "express"
import { dataSource } from "../config/ormconfig"
import { pharmacy } from "../entities/pharmacy.entity"

export const PharmacyCategory = {
    GET: async(req:Request, res:Response, next:NextFunction) => {
         try {
            const getpharmacy = await dataSource
            .getRepository(pharmacy)
            .find({
                relations:{
                    category:true
                }
            })
            res.json(getpharmacy)
         } catch (error){
            next(error)
         }
    },
    POST: async(req:Request, res:Response, next:NextFunction) => {
        try {
            const {title, desc, img, lang, price, refId} = req.body
            const {raw} = await dataSource
            .createQueryBuilder()
            .insert()
            .into(pharmacy)
            .values({pharmacy_title: title, pharmacy_desc: desc, pharmacy_img: img, pharmacy_lang: lang, pharmacy_price: price, category: refId})
            .returning(['pharmacy_id', 'pharmacy_title'])
            .execute()
            res.json(raw)
         } catch (error){
            next(error)
         }
   },

   PUT: async(req:Request, res:Response, next:NextFunction) => {
    try {
        const {id} = req.params
        const {title, desc, img, lang, price, refId} = req.body
        const {raw} = await dataSource
        .createQueryBuilder()
        .update(pharmacy)
        .set({pharmacy_title: title, pharmacy_desc: desc, pharmacy_img: img, pharmacy_lang: lang, pharmacy_price: price, category: refId})
        .where("pharmacy_id = :id", {id})
        .returning(["pharmacy_id", "pharmacy_title"])
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
        .from(pharmacy)
        .where("pharmacy_id = :id", {id})
        .returning(["pharmacy_id", "pharmacy_title"])
        .execute()
 
        res.json(raw)
     } catch (error) {
        next(error)
    }
 },
}