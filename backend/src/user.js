const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

name:{
    type:String
  },
  number:{
    type:Number
  },
  email:{
    type:String
  },
  password:{
    type:String
  },
  
}
)

module.exports = mongoose.model("users",userSchema);