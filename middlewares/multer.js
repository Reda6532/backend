import multer from "multer"
import path from "path"
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/images")
    },
    filename:(req,file,cb)=>{
        //what will happen is 
        //image.png+>file.originalname
        //.png
        const uniquename=Date.now()+path.extname(file.originalname)
        cb(null,uniquename)
    }
})
const upload = multer({
    storage,
    limits:{
        fileSize:2*1024*1024
        //on byte
    }
})
export default upload