import { addAdmin } from "../controllers/adminController.js";
import express from "express";


const adminRoute = express.Router()

adminRoute.post("/admin", addAdmin )

export default adminRoute