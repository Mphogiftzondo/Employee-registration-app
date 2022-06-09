 const mongoose=require('mongoose');

 const EmployeeSchema = new mongoose.Schema({
            fullName:{
                type: String,
                required : true,
            },
            position:{
                type : String,
                required: true,
            },
            // img: { 
            //     data: Buffer, 
            //     contentType: String,
            //     required:true,
            //  },
 })
 const Employee = mongoose.model("admin", EmployeeSchema)
 module.exports = Employee;