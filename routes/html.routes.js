

const express = require("express");
const HtmlRouter = express.Router();

const NotesModule = require("../moduls/Notes.module");

HtmlRouter.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.send(posts);
  } catch (error) {
    console.log("Somthing Error in /post");
    console.log(error);
  }
});

HtmlRouter.post("/html", async (req, res) => {
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

module.exports = {HtmlRouter};



