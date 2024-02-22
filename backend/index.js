const express = require("express");
const bodyParser = require('body-parser');
const db = require("./config/mongoose");
const Form = require('./models/form');

const port = 9000;
const app = express();

app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/api/v1/create", async function(req,res){
  try{
    const data = await Form.create(req.body);
  if(data){
    return res.status(200).json({
      success: true,
      message: "Data added successfully",
      data:data
    });
  }
  }catch(err){
    return res.status(500).json({
      success: false,
      message: err,
    });
  }
})

app.get("/api/v1/getdata", async function(req,res){
  try{
    let data = await Form.find();
    return res.status(200).json({
      success: true,
      message: "Data fetch successfully",
      data: data,
    });
  }catch(err){
    return res.status(500).json({
      success: false,
      message: err,
    });
  }
})


app.listen(port, function (err) {
  if (err) {
    console.log(`Error in connecting the server ${err}`);
  }
  console.log(`Server is running at the port ${port}`);
});
