import mongoose from "mongoose"
const teacherSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        course:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course",
            required:true
        }
    },{timestamps:true}
)
const Teacher =mongoose.model("Teacher",teacherSchema)
export default Teacher