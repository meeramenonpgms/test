var express=require('express');
const app=express();
app.set("view engine","ejs");
app.set("views","./viewss")

app.get("/",function(req,res){
    res.render("login")

})
app.get("/home",function(req,res){
    res.render("home")
})

app.post("/login",function(req,res){
    res.sendFile(__dirname+"/views/home.html")
})
app.listen(3000,function(){
    console.log("server started....")
})
