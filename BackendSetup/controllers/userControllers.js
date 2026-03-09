const dataModel=require("dataModel")

// post method function

async function addData(req,res){

   try{
     const data={
        userName:req.body.userName,
        userEmail:req.body.userEmail,
        userPass:req.body.userPass
    }
    await data.save()
    res.status(200).send("Data added Successfully")
   }
  catch(err){
    console.log("userData ,add Function is not working ",err.message);
    
  }

} 
addData()