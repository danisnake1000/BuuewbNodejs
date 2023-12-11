import { validationResult } from "express-validator"


export const validationFuntion = (req,res,next) =>{


    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(401).json({errors: error.array()})
    }
    next()
}