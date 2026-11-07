import jwt from "jsonwebtoken"
function verifyToken(req,res,next){
    try {
        const authheader=req.headers.authorization
        if(!authheader.startsWith("Bearer ")){
            return  res.status(401).json({message:"token missing"})
        }
        const token =authheader.split(" ")[1]
        jwt.verify(token,process.env.JWT_SECRET)
        next()
    } catch (error) {
        return res.status(401).json({message:error.message})
    }
}
export default verifyToken