const express=require("express");
const app=express()

app.get("/",(req,res)=>{
res.send(`<h1>hello i am anand</h1>`)
})


app.listen(2400,()=>{
    console.log("server is running on port 2400")
})