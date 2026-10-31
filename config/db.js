import mongoose from "mongoose"
async function connectDB(){
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("mongodb connected")
    }catch(error){
        console.log("mongodb connection error",error.message)
        process.exit(1)

    }
}
export default connectDB