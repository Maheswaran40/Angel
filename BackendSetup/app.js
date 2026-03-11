const express=require("express")
const app=express()

const dotenv=require("dotenv")
dotenv.config()

const connectDB=require("./Config/db")
connectDB()

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json({ limit: "5mb" }))

const routes=require("./routers/routes")
app.use("/api",routes)

app.listen(process.env.PORT,()=>console.log("Server is running on port http://localhost:5000"))
