const mongoose = require('mongoose')
const EmployeeSchema = new mongoose.Schema({
    long:String,
    lat:String
})

mongoose.model("employee",EmployeeSchema)