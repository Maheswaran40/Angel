const express=require("express")
const routes=express.Router()

const {addData,getData,deleteData,UpdateFun}=require("../controllers/userControllers")

routes.post("/register",addData)
routes.get("/list",getData)
routes.delete("/delete/:id",deleteData)
routes.put("/update/:id",UpdateFun)
module.exports=routes