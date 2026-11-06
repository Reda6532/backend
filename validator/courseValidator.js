import {body,  validationResult } from "express-validator";
const validateCourse=[
    body("title")
        .trim()
        .notEmpty()
        .bail()
        .isLength({min:3 , max:10})
        .withMessage("the title should have at least 3 caracters"),
    body("duree")
        .trim()
        .notEmpty()
        .withMessage("the duration is mandatory")
        .bail()
        .isFloat({min:1})
        .withMessage("the duration should be 1 h 30 min"),
    (req,res,next)=>{
        const errors =validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json(errors)
        }
        next()
    }
]
export default validateCourse