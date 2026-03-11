const dataModel = require("../model/userData")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// post method function

async function addData(req, res) {

  try {
    let hashSalt = 10
    let hashedData = await bcrypt.hash(req.body.userPass, hashSalt)
    const data = dataModel({
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userPass: hashedData
    })
    await data.save()
    res.status(200).send("Data added Successfully")
  }
  catch (err) {
    console.log("userData ,add Function is not working ", err.message);

  }

}

// get method function
async function getData(req, res) {
  try {

    let data = await dataModel.find()
    res.status(200).send(data)

  }
  catch (err) {
    console.log("user Get method is not working", err.message);
  }
}

// update Function 

async function UpdateFun(req, res) {
  try {

    await dataModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).send("data updated Successfully")
  }
  catch (err) {
    console.log("user Update function is not working", err.message);

  }
}



// delete Function 

async function deleteData(req, res) {
  try {
    await dataModel.findByIdAndDelete(req.params.id)
    res.status(200).send("data deleted successfully")
  }
  catch (err) {
    console.log("User delete function is not working", err.message);

  }
}



async function LoginFun(req, res) {
  try {
    const { userEmail, userPass } = req.body;

    const user = await dataModel.findOne({ userEmail })
    if (!user) {
      console.log("there is no user");
      res.status(404).json({ error: "user not found" })

    }
    console.log(user,"user");
    

    const isMatch = await bcrypt.compare(userPass, user.userPass)
    if (!isMatch) {
      console.log("Password is in correct");
      res.status(404).json({ error: "password is incorrect" })
    }
    console.log(isMatch,"isMatch");

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )
    //  Send token in httpOnly cookie
    // res.cookie(name, value, options)
console.log("Token",token)

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000 //1 hour
    })

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.userName,
        email: user.userEmail
      }
    });
console.log("login success fully")


  }
  catch (err) {
    console.log("Login function is not working", err.message);

  }
}

module.exports = { addData, getData, deleteData, UpdateFun, LoginFun }

