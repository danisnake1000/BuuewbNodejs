import express from "express";
import 'dotenv/config'
import authRouter from './routes/athu.routes.js'

import   "./database/conecct.js";

const app = express();
app.use(express.json())
app.use('/api/v1',authRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
   
})