const express=require("express");

const app=express();
app.use(express.json());
app.get('/sri',async (req,res)=>{
    res.send("done")
})