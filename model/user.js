const mongoose = require("mongoose");
const user = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  status: String,
  phoneNumber:Number,
  datetime: String,
  type:String,
  accountType:String,
  profileStatus:String,
  websiteUrl:String,
  qualification:String,
  language:String,
  jobCategory:String,
  experience:Number,
  currentSalary:Number,
  expectedSalary:Number,
  age:Number,
  country:String,
  city:String,
  pincode:Number,
  address:String,
  description:String,
  facebook:String,
  linkedin:String,
  twitter:String
});

module.exports = mongoose.model("user", user);
