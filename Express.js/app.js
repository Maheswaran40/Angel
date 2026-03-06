const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.status(200).send("welcome to Express js")
})

app.get("/about",(req,res)=>{
    res.status(200).send("<h1>About Page</h1>")
})

app.get('/product/:id',(req,res)=>{
    const ID=req.params.id
    console.log(typeof(ID));
    
   let userData=users.find((value,i)=>value.id==ID)
   console.log("userData",userData);
   
    res.status(200).send(`user id ${ID} ${userData.name}`)
})

let users=[{id:"1",name:"Abi"},{id:2,name:"name"}]

app.listen(5000,()=>console.log("Server is running"))