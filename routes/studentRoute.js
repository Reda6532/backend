import { getStudentByid,getStudents,addStudent,updateStudentByPatch,updateStudentByPut, formaulaireADDStudents, deleteStudent } from "../controller/studentController.js";
import express from "express"
import upload from "../middlewares/multer.js";
import multer from "multer";
const uploads= multer()
const studentRoutes=express.Router()
studentRoutes.get("/students",getStudents)
studentRoutes.get("/students/new",formaulaireADDStudents)
studentRoutes.get("/students/:id",getStudentByid)
studentRoutes.patch("/students/:id",uploads.none(),updateStudentByPatch)
studentRoutes.put("/students/:id",uploads.none(), updateStudentByPut)
studentRoutes.delete("/students/:id", deleteStudent)
studentRoutes.post("/students",upload.single("image"),addStudent)

studentRoutes.post("/addimage",upload.single("image"),(req,res)=>{
    res.json({message:"image upload succesfully",file:req.file})
})

export default studentRoutes