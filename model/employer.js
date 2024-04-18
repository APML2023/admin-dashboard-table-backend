const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    fullName:String,
    employerNumber:Number,
    companyName:String,
    countryName:String,
    regionName:String,
    language:String
})

const EmployeeModle =  mongoose.model("employers", EmployeeSchema)
 module.exports = EmployeeModle