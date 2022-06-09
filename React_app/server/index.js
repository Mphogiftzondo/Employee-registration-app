//require('dotenv').config();
const express = require("express");
const mongoose =require("mongoose");
const cors = require('cors');
const app = express();
var Schema = mongoose.Schema;
// const connections=require('./db');
// const userRoutes= require('./routes/users');
// const authRoutes=require("./routes/auth")
//connections()
app.use(express.json());
app.use(cors());
const adminModel = require("./modules/admins");

mongoose.connect("mongodb://localhost:27017/SpaceIndex",{
    useNewUrlParser : true,
})


// import itemRoutes from './modules/items.js';

// app.use(express.json({limit: "30mb",extended:true}));
// app.use(express.urlencoded({limit: "30mb",extended:true}));
// app.use('/items',itemRoutes)
// app.get('/',(req,res)=>{res.send('Hello')})
// app.use("/api/users",userRoutes);
// app.use("/api/auth",authRoutes);

app.post("/insert",async (req,res)=>{
    const fullName=req.body.fullName;
    const position=req.body.position;

const admin = new adminModel({ fullName:fullName,position:position});
try {
    await admin.save();
    res.send("inserted data");
} catch (error) {
    console.log(error);
}
});
app.get("/get",async (req,res)=>{
     adminModel.find({},(err,result) =>{
         if (err){
             res.send(err);
         }
         res.send(result);
     })
});
app.delete("/delete/:id",async (req,res)=>{
    const id = req.params.id;
    await adminModel.findByIdAndDelete(id).exec();
    res.send("deleted")
})
const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`server running of port ${port}...`);
});

