const mongoose =require('mongoose');
const jwt=require('jsonwebtoken');
const Joi=require('joi');
const passwordComplexity =require("joi-password-complexity")
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required : true,
    },
    fullName:{
        type : String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required : true,
    },
    password:{
        type : String,
        required: true,
    },
});

userSchema.methods.generateAuthToken= function (){
    const token =jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY,{expiresin:"7d"})
    return token
};
const User = mongoose.model("user",userSchema);

const validate =(data)=>{
    const schema = Joi.object({
        email:Joi.string().required().label("Email"),
        fullName:Joi.string().email().required().label("FUll Name"),
        phoneNumber:Joi.string().required().label("Phone Number"),
        password:passwordComplexity().required().label("Password"),
});
return schema.validate(data)
};

module.exports ={User,validate};