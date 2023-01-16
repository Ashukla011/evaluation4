

const mongoose=require("mongoose")
const PostSchema=mongoose.Schema({
    title:String,
    body:String,
    divice:String
})

const PostModel=mongoose.model("post",PostSchema)