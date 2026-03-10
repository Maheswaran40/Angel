const dataModel = require("../model/userData")

// post method function

async function addData(req, res) {

  try {
    const data = dataModel({
      userName: req.body.userName,
      userEmail: req.body.userEmail,
      userPass: req.body.userPass
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

    await dataModel.findByIdAndUpdate(req.params.id,req.body,{ new: true })
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

module.exports = { addData, getData, deleteData,UpdateFun }

