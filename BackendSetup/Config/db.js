const mongoose=require("mongoose")
const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Db is connected"))
    .catch((err)=>console.log("Db is not connected Properlly ",err.message))
}
module.exports=connectDB