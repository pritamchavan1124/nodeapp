const express=require("express")
var app=express()


app.get('/',(req,resp)=>{
    resp.sendFile('public/index.html',{root:__dirname})
})
app.listen(8081,'0.0.0.0',()=>{
    console.log("server start at 8000");
}
)