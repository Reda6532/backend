import express from "express"

import dotenv from "dotenv"
import logger from "./middlewares/logger.js"
import connectDB from "./config/db.js"

import route from "./routes/routes.js"

dotenv.config()
const app=express()
app.use(express.static("public"))
app.use(express.json())
app.use(logger)
const port=process.env.NUM_PORT
app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))
app.use(route)
app.use((req,res)=>{
    res.status(404).json({message:"route not found"})

})
// connectDB()
// app.listen(port,()=>{
//     console.log(`server running at ${port}`)
// })
connectDB().then(()=>{
    app.listen(port,()=>console.log(`server running at ${port}`))
})