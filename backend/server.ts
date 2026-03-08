import express from "express"
import dotenv from "dotenv"

import  connectDB  from "../database/db"
import voiceRoutes from "./routes/voiceRoutes"

dotenv.config()

const app = express()

app.use(express.json())

connectDB()

app.get("/",(req,res)=>{

 res.json({message:"Voice AI Agent running"})

})

app.use("/api",voiceRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{

 console.log(`Server running http://localhost:${PORT}`)

})