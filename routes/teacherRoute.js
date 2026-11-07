import express from "express";
import { addTeacher, deleteTeacher, getTeacher, getTeacherById, updateTeacherByPut } from "../controller/teacherController.js";
import verifyToken from "../middlewares/auth.js";
import verifyAdmin from "../middlewares/adminMiddleware.js";

const teacherRoute=express.Router()


teacherRoute.get("/teachers",verifyToken,verifyAdmin, getTeacher)
teacherRoute.get("/teachers/:id", verifyToken,getTeacherById)
teacherRoute.delete("/teachers/:id", verifyToken,deleteTeacher)
teacherRoute.post("/teachers",addTeacher)
teacherRoute.put("/teachers/:id",verifyToken,updateTeacherByPut)
export default teacherRoute