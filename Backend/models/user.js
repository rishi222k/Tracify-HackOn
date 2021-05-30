const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  Email :{
    type:String,
  }, 
  P_hash:{
    type:String,
  },
  P_No:{
    type:Number,
  },
  aadhar_Number :{
    type: Number,
  },
  password:{
    type:String,
  },
  V_status :{
    type:String,
  },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
