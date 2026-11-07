import jwt from "jsonwebtoken"
function verifyAdmin(req,res,next){
    try {
        const authheader =req.header.authorization
        const token =authheader.split(" ")[1]
        const verifiedToken =jwt.verify(token,process.env.JWT_SECRET)
        if(verifiedToken.role !=="admin"){
            return res.status(403).json({message:"access denied, admin only"})
        }
        next()
    } catch (error) {   
        return res.status(401).json({message:error.message})
        
    }
}
export default verifyAdmin