import { validationResult } from "express-validator/src/validation-result.js"



export const register = (req, res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    res.json({ok:"register"})
}



export const login = (req, res) =>{
    res.json({ok:"login"})
}

