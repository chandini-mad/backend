const express= require("express")
const app= express()
const cors=require("cors")
const bodyParser=require("body-parser")
const Register=require("./registerSchema.js")
const mongoose=require("mongoose")
const port=4000;

console.log(Register)

app.use(bodyParser.urlencoded({
	extented:true
}))
app.use(bodyParser.json())

app.use(cors())

mongoose.connect("mongodb+srv://chandini-mad:mad-7635@cluster0.ogrorpu.mongodb.net/firstdb?retryWrites=true&w=majority")
  .then(()=>{
  	console.log("Created mongodb database")
  })
  .catch((err)=>{
  	console.log(err)
  })

app.get("/",(req,res)=>{
  
})
app.post("/register",(req,res)=>{
  //const {username,password}=req.body
  const username="dummyuser",password="dummypassword"
  const newUser=new Register({
    username:username,
    password:password
  })
  newUser.save()  
})



app.listen(port,()=>console.log("server started"))
