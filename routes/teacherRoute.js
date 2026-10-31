import express from "express";
import { addTeacher, deleteTeacher, getTeacher, getTeacherById, updateTeacherByPut } from "../controller/teacherController.js";

const teacherRoute=express.Router()


teacherRoute.get("/teachers",getTeacher)
teacherRoute.get("/teachers/:id",getTeacherById)
teacherRoute.delete("/teachers/:id", deleteTeacher)
teacherRoute.post("/teachers",addTeacher)
teacherRoute.put("/teachers/:id",updateTeacherByPut)
export default teacherRoute