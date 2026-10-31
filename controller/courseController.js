import Course from "../Model/courseModel.js";

async function addCourse(req,res){
        try{
        const newCourse=await Course.create({
            title:req.body.title,
            duree:req.body.duree  
        })
        res.status(201).json(newCourse)
    }catch(error){
        res.status(400).json({message:error.message})
    }
    
}
async function deleteCourse(req,res){
     try{
        const course=await Course.findByIdAndDelete(req.params.id)
            if(!course){
      return res.status(404).json({message:"course not found"})
        }
        res.status(200).json({message:"delete succesfully"})
    }catch(error){
        res.status(400).json({message:error.message})

    }
}
async function getCourse(req,res){
    try{
        const course=await Course.find()
        res.status(200).json(course)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

async function getCourseById(req,res){
    try{
        const course =await Course.findById(req.params.id)
        if(!course){
            return res.status(404).json({message:"course not found"})
        }
        res.status(200).json(course)
    }catch(error){
        res.status(500).json({message:error.message})
    }

}

async function updateCourseByPut(req,res){
    console.log(req.params.id)
    
    try{
        const course=await Course.findByIdAndUpdate(req.params.id,
            {title:req.body.title,duree:req.body.duree}
        )
        if(!course){
            return res.status(404).json({message:"course not found"})
        }
        res.status(200).json(course)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export{addCourse,deleteCourse,getCourse,getCourseById,updateCourseByPut}