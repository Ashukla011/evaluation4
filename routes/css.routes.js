

const express = require("express");
const CssRouter = express.Router();

const NotesModule = require("../moduls/Notes.module");



CssRouter.post("/Css", async (req, res) => {
  const payload = req.body;
  try {
    const Posts = new NotesModule(payload);
    await Posts.save();
    res.send("Created Successfully");
  } catch (error) {
    console.log("Somthing Error in Create");
    console.log(error);
  }
});


module.exports = {CssRouter};



