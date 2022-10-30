import { Router } from "express";
import { CategoryController } from "../controller/category";
import { ClinikaController } from "../controller/clinika";
import { CourseController } from "../controller/course";
import { CourseuserController } from "../controller/courseusers";
import { HomePageController } from "../controller/homepages";
import { orderController } from "../controller/orders";
import { PharmacyCategory } from "../controller/pharmacy";
import { serviceController } from "../controller/service";

const router = Router()
router   
    .get('/homepage', HomePageController.GET)//HomePage
    .post('/homepage', HomePageController.POST)//HomePage
    .put('/homepage/:id', HomePageController.PUT)//HomePage
    .delete('/homepage/:id', HomePageController.DELETE)//HomePage

    .get('/category', CategoryController.GET)//Category
    .post('/category', CategoryController.POST)//Category
    .put('/category/:id', CategoryController.PUT)//Category
    .delete('/category/:id', CategoryController.DELETE)//Category

    .get('/pharmacy', PharmacyCategory.GET)//Pharmacy
    .post('/pharmacy', PharmacyCategory.POST)//Pharmacy
    .put('/pharmacy/:id', PharmacyCategory.PUT)//Pharmacy
    .delete('/pharmacy/:id', PharmacyCategory.DELETE)//Pharmacy

    .get('/services', serviceController.GET)//Services
    .post('/services', serviceController.POST)//Services
    .put('/services/:id', serviceController.PUT)//Services
    .delete('/services/:id', serviceController.DELETE)//Services

    .get('/clinika', ClinikaController.GET)//ClinikaINFO
    .post('/clinika', ClinikaController.POST)//ClinikaINFO
    .put('/clinika/:id', ClinikaController.PUT)//ClinikaINFO
    .delete('/clinika/:id', ClinikaController.DELETE)//ClinikaINFO


    .get('/courses', CourseController.GET)//Courses
    .post('/courses', CourseController.POST)//Courses
    .put('/courses/:id', CourseController.PUT)//Courses
    .delete('/courses/:id', CourseController.DELETE)//Courses


    .get('/courseusers', CourseuserController.GET)//CourseUsersINFO
    .post('/courseusers', CourseuserController.POST)//CourseUsersINFO
    .put('/courseusers/:id', CourseuserController.PUT)//CourseUsersINFO
    .delete('/courseusers/:id', CourseuserController.GET)//CourseUsersINFO


    .get('/orders', orderController.GET)//Orders
    .post('/orders', orderController.POST)//Orders
    .put('/orders/:id', orderController.PUT)//Orders
    .delete('/orders/:id', orderController.DELETE)//Orders


export default router; 