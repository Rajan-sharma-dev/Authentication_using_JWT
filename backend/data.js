const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/myCitiesCollections").then(()=>{
    console.log("Yes i am in databse ")
}).catch(err=>{
    console.log(err)
})
const Citydetails =new mongoose.Schema({
    id:{ 
        type:Number,
        required: true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        
    },
    state:{ 
        type:String,
        required:true
    }});

const Collection= new mongoose.model("myCityCollections",Citydetails)

module.exports=Collection;