
// const express=require("express")
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");

// const connection=require("../config/db")
// const UserModul=require("../moduls/user.model")

// const userRouter=express.Router();

// userRouter.post("/register ",async(req,res)=>{
//     const {title,email,gender,password}=req.body;
//     const email_present=await UserModul.findOne({email})
//     if(email_present?.email){
//         res.send("Email already Exist")
//     }
//     else{
//         try{
//             bcrypt.hash(password,5,async(err,hash)=>{
//                 const user=new UserModul({email,password:hash})
//                 await user.save();
//                 await user.save();
//                 res.send("register")
//             })
//         }
//         catch (error) {
//             console.log("Somthing Error in register");
//             console.log(error);
//           }
//     }


// })


// userRouter.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//       let user = await UserModul.find({ email });
//       if (user.length > 0) {
//         const hashed_password = user[0].password;
//         bcrypt.compare(password, hashed_password, function (err, result) {
//           if (result) {
//             const token = jwt.sign({ userID: user[0]._id }, "hush");
//             res.send({ msg: "Login successfull", token: token });
//           } else {
//             res.send("Login failed");
//           }
//         });
//       }
//     } catch (error) {
//       console.log("somthing Wrong in Login");
//       console.log(error);
//     }
//   });


//   module.exports=userRouter;




const express=require("express")
const {UserModel}=require("../moduls/user.model")
const userRouter=express.Router()
const jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt')


userRouter.post("/register",async (req,res)=>{
    const {email,password,name,gender}=req.body;
    try{
        bcrypt.hash(password, 5,async(err, secure_password)=>{
            // Store hash in your password DB.
    if(err){
        console.log(err)
    }
    else{
        const user=new UserModel({email,password:secure_password,name,gender});
        await user.save();
        res.send("Registered");
    }
        });
    }
    catch(err){
        res.send("err while doing registration")
    res.send(err)
    }
    })
    
    userRouter.post("/login",async(req,res)=>{
        const {email,password}=req.body;
        try{
            const user=await UserModel.find({email});
            const hashed_pass=user[0].password; 
            if(user.length>0)
            {
          bcrypt.compare(password, hashed_pass, function(err, result) {
               // result == true
    if(result){
        const token = jwt.sign({userID:user[0]._id}, 'masai');
        res.send({"msg":"Login successful","token":token});
    }
    else{
        res.send("wrong credential");
    }
                });
            }
            else{
                res.send("Wrong credential!!")
            }
            
        }
        catch(err){
            res.send(err)
        } 
    })
    
module.exports={userRouter}