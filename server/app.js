const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./Employee')
const Employee = mongoose.model("employee")
const mongURL = "mongodb+srv://Anas:R2ndmv9IpqkqJucr@cluster0.dla6o.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongURL,{
})
mongoose.connection.on("Connected",()=>{
    console.log("Connect Sucess")
})
mongoose.connection.on("error",(err)=>{
    console.log("Connect Failed",err)
})
app.get('/',(req,res)=>{
    res.send("hi my ds")
})

app.listen(3030,()=>{
    console.log("Listening on 3030")
})