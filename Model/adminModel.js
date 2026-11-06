import { request } from "express";
import mongoose from "mongoose"
const adminSchema=new mongoose.Schema(
    {
        name:{
            type:true,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true
        },
        password:{
            type:String,
            default:"admin",
        },
        role:{
            type:String,
            default:"admin",
        }
    },{timestamps:true}
)

const Admin =mongoose.model("Admin",adminSchema)
export default Admin