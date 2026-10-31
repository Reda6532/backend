import Teacher from "../Model/teacherModel.js";

async function addTeacher(req,res){
        try{
        const newTeacher=await Teacher.create({
            name:req.body.name,
            course:req.body.course  
        })
        res.status(201).json(newTeacher)
    }catch(error){
        res.status(400).json({message:error.message})
    }
    
}

async function deleteTeacher(req,res){
     try{
        const teacher=await Teacher.findByIdAndDelete(req.params.id)
            if(!teacher){
      return res.status(404).json({message:"teacher not found"})
        }
        res.status(200).json({message:"delete succesfully"})
    }catch(error){
        res.status(400).json({message:error.message})

    }
}

async function getTeacher(req,res){
    try{
        const teacher=await Teacher.find()
        res.status(200).json(course)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

async function getTeacherById(req,res){
    try{
        const teacher =await Teacher.findById(req.params.id)
        if(!teacher){
            return res.status(404).json({message:"teacher not found"})
        }
        res.status(200).json(teacher)
    }catch(error){
        res.status(500).json({message:error.message})
    }

}


async function updateTeacherByPut(req,res){
    console.log(req.params.id)
    
    try{
        const teacher=await Teacher.findByIdAndUpdate(req.params.id,
            {name:req.body.name,course:req.body.course}
        )
        if(!studentt){
            return res.status(404).json({message:"student not found"})
        }
        res.status(200).json(studentt)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export{addTeacher,getTeacher,getTeacherById,deleteTeacher,updateTeacherByPut}