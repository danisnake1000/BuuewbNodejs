import mongoose from "mongoose";
    


    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connect db 👌")
    } catch (error) {
        console.log('error en la coneccion base de datos: ' + error.message)
        
    }    
 