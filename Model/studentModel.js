import mongoose from "mongoose"
const studentSchema=new mongoose.Schema({
        name:{
            type:String,
            required:[true,"name is required"],
            minlength:[3,"name must have at least 3 car"]
        },
        age:{
            type:Number,
            required:[true,"age is required"],
            min:[16,"age ,ust be at least 16"],
            max:[50,"age must be at most 60"]
        },
        image:{
            type:String,
            default:null
        },
        courses:{
            type:[{
                type: mongoose.Schema.Types.ObjectId,
                ref:"course"
            }],
            required:true,
            default:undefined,
            validate:{
                validator:value=>value.length>0,
                message:"A student must have at least one course"
            }
        }
    },{timestamps:true}
)
const student =mongoose.model("student",studentSchema)
export default student