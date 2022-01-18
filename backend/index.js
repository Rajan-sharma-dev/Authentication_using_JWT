const express = require('express')
const res = require('express/lib/response')
const app = express()
const mongoose=require('mongoose')
const Collection1=require('./data')
const data = require('./database')
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')
const  middle=(req,res,next)=>{
    Collection1.deleteMany().then((res)=>console.log(res))
    next()
}
app.get("/",(req,res)=>{
    //res.render('index')
})
app.get("/login",middle,(req,res) => {
    for(let i=0;i<data.length;i++){
        const data1=new Collection1({
            id:data[i].id,
            name:data[i].name,
            state:data[i].state
        })
        data1.save()
      }
    Collection1.find({}).then((result)=>res.render('index.ejs',{data:result}))
    //res.render('index.ejs')
   
})
app.listen(8000, () => {
    console.log("connection created")
})