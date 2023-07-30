const express=require("express");
const app=express();

const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.listen(3000,function(){
    console.log("Server started at port 3000");
});
app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/",function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var result=weight/(height*height);

    res.send("The bmi is "+result);
})