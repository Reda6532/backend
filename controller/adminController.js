import Admin from "../Model/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
async function addAdmin(req,res){
    try {
        const {name,email,password}=req.body
        //const name =req.body.name
        //const email =req.body.email
        //const password=req.body.password
        const existingadmin=await Admin.findOne({email})
        if(existingadmin){
            return res.status(400).json({message:"cet email existe deja"})
        }
        const hashpassword=await bcrypt.hash(password,10)
        const admin =await Admin.create({
            name,email,password:hashpassword

        })
        return res.status(201).json({
            message:"administrateur ajoute avec succes",admin
        })
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
async function login(req,res) {
    try {
        const{email,password}=req.body
        if(!email || !password){
            return res.status(400).json({message:"email et password sont obligatoire"})
        }
        const admin =await Admin.findOne({email})
        if(!admin){
            return res.status(401).json({message:"email doesnt exist"})
        }
        const ispasswordcorrect = await bcrypt.compare(password,admin.password)
        if(!ispasswordcorrect){
            return res.status(401).json({message:"email ou password incorrect"})
        }
        const token = jwt.sign(
            {
                id:admin._id,
                role:admin.role

            },
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
        )
        return res.status(200).json({message:"connexion reussie",token,admin})
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }

}
export{addAdmin,login}