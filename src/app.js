const express = require("express");
const Prep = require("./model/class");
const data = express();
require("./db/conn");

data.use(express.json())
data.post("/prep",async(req,res)=>{
    console.log(req.body);
const user = new Prep(req.body);
await user.save(req.body)



})
data.get("/prep",async(req,res) =>{

const prepData = await Prep.find();
    res.send(prepData)


})
data.patch("/prep/:id",async(req,res) =>{
    const _id = req.params.id;
const prepPatchData =   await Prep.findByIdAndUpdate(_id,req.body,{


    new:true
})
res.send(prepPatchData)


})

data.delete("/prep/:id",async(req,res)=>{
const _id = req.params.id;
const prepDelete =   await Prep.findByIdAndDelete(_id);
res.send(prepDelete);  



})





data.listen(8000,()=>{

    console.log("Listening");


})