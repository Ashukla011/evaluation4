

const mongoose=require("mongoose")
const NotesSchema=mongoose.Schema({
    question:String,
    Answare:String,
    
})

const NotesModule=mongoose.model("notes",NotesSchema)

module.exports={
    NotesModule
}