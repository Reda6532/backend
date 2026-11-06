import students from "../data/studentData.js";
import student from "../Model/studentModel.js";

async function getStudents(req,res){
    //when we dont use:
    // res.status(200).json(students)
    // when we use render:
    // res.render("talamid",{title:"liste des etudiants",students})
    //when we use data base

    try{
        const students=await student.find()
        res.status(200).json(students)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
function formaulaireADDStudents(req,res){
    res.render("addStudent")
}
async function getStudentByid(req,res){
    // const id=Number(req.params.id)
    // const student =students.find(s=>s.id===id)
    // if(!student){
    //     return res.status(404).json({message:"student not found"})
    // }
    // res.status(200).json(student)
    try{
        const studentt =await student.findById(req.params.id)
        if(!studentt){
            return res.status(404).json({message:"student not found"})
        }
        res.status(200).json(studentt)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
async function addStudent(req,res){
    try{
        const newStudent=await student.create({
            name:req.body.name,
            age:req.body.age  ,
            courses:req.body.courses
        })
        res.status(201).json(newStudent)
    }catch(error){
        res.status(400).json({message:error.message})
    }
    
}
// function addStudent(req,res){
//     const newStudent={
//         id:students.length+1,
//         name:req.body.name,
//         age:req.body.age,
//         images:req.file?req.file.filename : null
//     }
//     students.push(newStudent)
//     //when we use ejs
//     // res.status(201).json(newStudent)
//     res.redirect("/students")
// }
async function updateStudentByPut(req,res){
    // const id=Number(req.params.id)
    // const student=students.find(s=>s.id===id)
    // if(!student){
    //     return res.status(404).json({message:"student not found"})
    // }
    // student.name=req.body.name
    // student.age=req.body.age
    // res.status(200).json(student)
    console.log(req.params.id)
    
    try{
        const studentt=await student.findByIdAndUpdate(req.params.id,
            {name:req.body.name,age:req.body.age}
        )
        if(!studentt){
            return res.status(404).json({message:"student not found"})
        }
        res.status(200).json(studentt)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
async function updateStudentByPatch(req,res){
    // const id=Number(req.params.id)
    // const student=students.find(s=>s.id===id)
    // if(!student){
    //    return res.status(404).json({message:"student not found"})
    // }
    // if(req.body.name!==undefined){
    //     student.name=req.body.name
    // }
    // if(req.body.name!==undefined){
    //     student.age=req.body.age
    // }
    // res.status(200).json(student)
    const updates={}
    if(req.body.name !==undefined) updates.name=req.body.name
    if(req.body.age !==undefined) updates.age=req.body.age 
    try {
        const student =await student.findByIdAndUpdate(req.params.id,
            updates,{new:true}
        )
        if(!student){
            return res.status(404).json({message:"student not found"})
        }
        res.status(200).json(student)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

async function deleteStudent(req,res){
    // const id=Number(req.params.id)
    // const student=students.find(s=>s.id===id)
    // if(!student){
    //   return res.status(404).json({message:"student not found"})
    // }
    // res.status(200).json({})
    try{
        const studentt=await student.findByIdAndDelete(req.params.id)
            if(!studentt){
      return res.status(404).json({message:"student not found"})
        }
        res.status(200).json({message:"delete succesfully"})
    }catch(error){
        res.status(400).json({message:error.message})

    }

}
export{getStudentByid,getStudents,addStudent,updateStudentByPatch,updateStudentByPut,formaulaireADDStudents,deleteStudent}