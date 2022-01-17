const express = require('express')
const res = require('express/lib/response')
const app = express()
const mongoose=require('mongoose')
const Collection1=require('./data')
const data = require('./database')
const  middle=(req,res,next)=>{
    Collection1.deleteMany().then((res)=>console.log(res))
    next()
}
app.get("/login",middle,(req,res) => {
    for(let i=0;i<data.length;i++){
        const data1=new Collection1({
            id:data[i].id,
            name:data[i].name,
            state:data[i].state
        })
        data1.save()
      }
    Collection1.find({}).then((result)=>res.send(result))
})
app.listen(8000, () => {
    console.log("connection created")
})