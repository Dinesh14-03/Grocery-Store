const mongoose = require("mongoose")

const carting = new mongoose.Schema({
    name : {
        type:String
    },
    actualPrice : {
        type:Number
    },
    discountPrice :{
        type:Number
    },
    price :{
        type:Number
    },
})

module.exports = mongoose.model("carts" ,carting)