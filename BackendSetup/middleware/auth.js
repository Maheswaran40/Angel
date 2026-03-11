const jwt=require("jsonwebtoken")

async function authmiddleware(req,res,next){

const token=req.cookies.token;
console.log(req.userEmail);

  if (!token) {
        return res.status(401).json({ message: "No Token" });
    }

    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decode
        next(); //tells Express to go to the next route.
    }
    catch{
         return res.status(401).json({ message: "Invalid Token" });
    }
}
module.exports = authmiddleware