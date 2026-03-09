const express=require("express")
const app=express()

const dotenv=require("dotenv")
dotenv.config()

const connectDB=require("./Config/db")
connectDB()


app.listen(process.env.PORT,()=>console.log("Server is running on port http://localhost:5000"))
