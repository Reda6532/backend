import { request } from "express";
import mongoose from "mongoose"
const adminSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            match:/^[a-zA-Z]+[0-9]*@[a-zA-Z]+\.[a-zA-Z]+$/
        },
        password:{
            type:String,
            required:true,
            trim:true
        },
        role:{
            type:String,
            default:"admin",
        }
    },{timestamps:true}
)

const Admin =mongoose.model("Admin",adminSchema)
export default Admin