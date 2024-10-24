const { log } = require('console')
const express=require('express')

const app=express()
const PORT=3030
app.get("/",(req,res)=>{
  res.send("hello world");
})

app.get("/greet",(req,res)=>{
  res.send("Good Morning")
})

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})