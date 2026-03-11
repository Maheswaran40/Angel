const express=require("express")
const routes=express.Router()

const {addData,getData,deleteData,UpdateFun,LoginFun}=require("../controllers/userControllers")
const authmiddleware=require("../middleware/auth")
routes.post("/register",addData)
routes.get("/list",getData)
routes.delete("/delete/:id",deleteData)
routes.put("/update/:id",UpdateFun)
routes.post("/login",LoginFun)

routes.get("/dashboard", authmiddleware, (req, res) => {
   res.json({
      message: "Welcome",
      user: req.user
   })
})
module.exports=routes