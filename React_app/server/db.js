const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");

module.export=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifieldTopology:true,
    };
    try{
          mongoose.connect(process.env.DB ,connectionParams);
        console.log("Connected to database succesfully");
    }catch(error){
        console.log(error);
        console.log('not connected to database');
    }
}