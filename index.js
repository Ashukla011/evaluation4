
const express=require("express")
const connection=require("./config/db")
const {HtmlRouter}=require("./routes/html.routes")

const {CssRouter}=require("./routes/css.routes")

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("successfull")
})
app.use("/pages",HtmlRouter)

app.use("/pages",CssRouter)




app.listen(4500,async()=>{
    try{
        await connection
        console.log("Connected With DB");
    }catch(err){
        console.log("Somethibg Wrong i Server")
    }
    console.log("Server is runnin 4500")
})



// {
//     "name":"Avnish",
//     "email":"avnish@123",
//     "gender":"male",
//     "password":"nothing"
//  }

