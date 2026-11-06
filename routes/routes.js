import courseRoute from "./courseRoute.js"
import teacherRoute from "./teacherRoute.js"
import studentRoutes from "./studentRoute.js"
import adminRoute from "./adminRoute.js"
import express from "express"

const route=express.Router()
route.use(adminRoute)
route.use(studentRoutes)
route.use(courseRoute)
route.use(teacherRoute)
export default route
