import express from "express";
import { addCourse, deleteCourse, getCourse, getCourseById, updateCourseByPut } from "../controller/courseController.js";
import validateCourse from "../validator/courseValidator.js";
const courseRoute =express.Router()

courseRoute.get("/courses",getCourse)
courseRoute.post("/courses", validateCourse ,addCourse)
courseRoute.get("/courses/:id",getCourseById)
courseRoute.delete("/courses/:id", deleteCourse)
courseRoute.post("/courses",addCourse)
courseRoute.put("/courses/:id",updateCourseByPut)
export default courseRoute