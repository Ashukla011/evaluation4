

const express = require("express");
const postRouter = express.Router();

const PostModel = require("../moduls/post.module");

postRouter.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.send(posts);
  } catch (error) {
    console.log("Somthing Error in /post");
    console.log(error);
  }
});

postRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const Posts = new PostModel(payload);
    await Posts.save();
    res.send("Created Successfully");
  } catch (error) {
    console.log("Somthing Error in Create");
    console.log(error);
  }
});

postRouter.patch("/update/:noteID", async (req, res) => {
  var userID = req.body.userID;
  var noteID = req.params.noteID;
  var payload = req.body;

  try {
    const notes = await PostModel.findOne({ _id: noteID });
    if (userID !== notes.userID) {
      res.send("Not Authorized");
    } else {
      await PostModel.findByIdAndUpdate({ _id: noteID }, payload);
      res.send("Notes Edited Successfully");
    }
  } catch (error) {
    console.log(error);
    console.log("Somthing error in Edit");
  }
});

postRouter.delete("/delete/:noteID", async (req, res) => {
  const userID = req.body.userID;
  const noteID = req.params.noteID;
  try {
    const notes = await PostModel.findOne({ _id: noteID });
    if (userID !== notes.userID) {
      res.send("Not Authorized");
    } else {
      await PostModel.findByIdAndDelete({ _id: noteID });
      res.send("Notes Deleted Successfully");
    }
  } catch (error) {
    console.log(error);
    console.log("Somthing error in Delete");
  }
});

module.exports = {postRouter};



