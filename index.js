
const express=require("express")
const connection=require("./config/db")
const {HtmlRouter}=require("./routes/html.routes")

const {CssRouter}=require("./routes/css.routes")
const c=require("cors")
const app=express()
app.use(express.json())

// c.use(cors({
//     'allowedHeaders': ['Content-Type', 'API-Key', 'API-Secret', 'Access-Control-Allow-Headers', 'accept', 'client-security-token'],
//     'exposedHeaders': ['sessionId'],
//     'origin': '*',
//     'methods': 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
//     'preflightContinue': false,
//     'credentials': true
//   }));


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

