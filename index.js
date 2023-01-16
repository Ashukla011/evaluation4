
const express=require("express")
const connection=require("./config/db")
const {postRouter}=require("./routes/Post.routes")

const {userRouter}=require("./routes/user.routes")
const {authenticate}=require("./middleware/authentication")
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("evalutation 4")
})
app.use("/users",userRouter)
app.use(authenticate)
app.use("/posts",postRouter)




app.listen(4500,async()=>{
    try{
        await connection
        console.log("Connected With DB");
    }catch(err){
        console.log("Somethibg Wrong i Server")
    }
})



// {
//     "name":"Avnish",
//     "email":"avnish@123",
//     "gender":"male",
//     "password":"nothing"
//  }

