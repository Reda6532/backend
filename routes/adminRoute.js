import { addAdmin, login } from "../controller/adminController.js";
import express from "express";


const adminRoute = express.Router()

adminRoute.post("/admin", addAdmin )
adminRoute.post("/login",login)

export default adminRoute