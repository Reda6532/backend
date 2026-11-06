import {body,  validationResult } from "express-validator";
const validateTeacher=[
    body("name")
        .trim()
        .notEmpty()
        .bail()
        .isLength({min:14 , max:20})
        .withMessage("the title should have at least 4 caracters"),
    body("course")
        .trim()
        .notEmpty()
        .withMessage("the course is mandatory")
        .bail(),
    (req,res,next)=>{
        const errors =validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json(errors)
        }
        next()
    }
]
export default validateCourse