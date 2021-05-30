const router =require('express').Router();
const bycrypt =require('bcrypt');
const path = require("path");
const User =require('../models/user');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
router.post("/login" ,  async(req,res) =>{
    var aname=req.body.name;
    console.log(req.body);
    const user= await User.find({name:aname});
    // console.log(user[0].password);
    console.log(req.body.password);
    if(user==null)
    {
      res.json(user);
    }
    try{
        if(await bycrypt.compare(req.body.password,user[0].password))
        {
          res.json(user);
        }
        else
        {
          res.json(user);
        }
    }
    catch(err)
    {
      console.log("error");
    }
})


router.post("/signup", upload.single("image"), async (req, res) => {
    try {
      // Upload image to cloudinary
      // console.log(req.body);
      const result = await cloudinary.uploader.upload(req.file.path);
      res.json(result);
      // Create new user
      var password=req.body.password;
      const salt =await bycrypt.genSalt();
      const salt2 =await bycrypt.genSalt();
      const n = Math.floor(Math.random() * 100); 
      const phash =await bycrypt.hash(n.toString(),salt);
      const hashedPassword =await bycrypt.hash(password,salt);
      var password=req.body.password;
      let user = new User({
        name: req.body.name,
        Email:req.body.email,
        P_hash:phash,
        P_No:req.body.pnumber,
        aadhar_Number: req.body.aadhar,
        password:hashedPassword,
        V_status:req.body.status,
        avatar: result.secure_url,
        cloudinary_id: result.public_id,
      });

      await user.save();
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  });

module.exports=router;