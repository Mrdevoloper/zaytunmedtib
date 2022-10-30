import { NextFunction, Request, Response } from "express"
import { dataSource } from "../config/ormconfig"
import { Orders } from "../entities/orders.entity"
export const orderController = {
    GET: async(req:Request, res:Response, next:NextFunction) => {
       try {
            const getOrders = await dataSource.getRepository(Orders).find()
            res.json(getOrders)
       } catch (error) {
            next(error)
       }
    },
POST: async(req:Request, res:Response, next:NextFunction) => {
     try {
         const {title, username, phone, location } = req.body
         const {raw} = await dataSource
         .createQueryBuilder()
         .insert()
         .into(Orders)
         .values({order_title: title, order_user_name: username, order_user_phone:phone, order_user_location: location})
         .returning(['order_id', 'order_title'])
         .execute()
         res.json(raw)
      } catch (error) {
         next(error)
      }
},

PUT: async(req:Request, res:Response, next:NextFunction) => {
 try {
     const {id} = req.params
     const {title, username, phone, location } = req.body
     const {raw} = await dataSource
     .createQueryBuilder()
     .update(Orders)
     .set({order_title: title, order_user_name: username, order_user_phone:phone, order_user_location: location})
     .where("order_id = :id", {id})
     .returning(["order_id", "order_title"])
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
     .from(Orders)
     .where("order_id = :id", {id})
     .returning(["order_id", "order_title"])
     .execute()

     res.json(raw)
  } catch (error) {
     next(error)
 }
},
}