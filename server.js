const express=require("express");
const mongoos=require("mongoos");
const app=express();
app.get("/",(req,res)=>{
res.send(`<h1>hello i am anand</h1>`)
})
app.get("/about",(req,res)=>{
    res.send(`<h1>about</h1>`)
    })

app.listen(2400,()=>{
    console.log("server is running on port 2400")
});

mongoos.console('mongodb+srv://jacklinuxnd:p4CeG4LxCP8IdakF@cluster0.gkvajcw.mongodb.net/jacklinuxnd?retryWrites=true&w=majority').then(()=>{console.log("connected with database")}).catch((err)=>{
    console.log(`somthing is wrong ${err}`)
})
