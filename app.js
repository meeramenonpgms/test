var express=require('express');
const app=express();

app.get("/",function(req,res){
res.sendFile(__dirname+"/views/login.html")

})
app.get("/home",function(req,res){
    res.sendFile(__dirname+"/views/home.html")
})

app.post("/login",function(req,res){
    res.sendFile(__dirname+"/views/home.html")
})
app.listen(3000,function(){
    console.log("server started....")
})
