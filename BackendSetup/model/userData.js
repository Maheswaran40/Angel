const { default: mongoose } = require("mongoose")
const mongosse=require("mongoose")
const userData=mongosse.Schema(
   {
     userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userPass:{
        type:String,
        required:true
    }
   }
)
const dataModel=mongoose.model("userData",userData)
module.exports=dataModel