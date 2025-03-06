const express = require("express")
const mongoose = require("mongoose");
const app = express();

const port =4000;

app.use(express.json());

const cors = require("cors")
app.use(cors());



mongoose.connect("mongodb://localhost:27017/grocery").then(()=>{
    console.log("connecteds success");
})

const User = require("./user");
const Cart = require("./cart");

app.post("/grocery/users",async(req,res)=>{
    try{
        let Users = new User(req.body);
        let result = await Users.save();
        res.send(result);
    }catch(err){
        console.log("Errordsr:",err)
    }
   
})
app.post("/grocery/carts",async(req,res)=>{
    try{
        
        let Carts  = new Cart(req.body);
        let resultCart = await Carts.save();
        res.send(resultCart)
    }
    catch(err){
        console.log("Error occured",err)
    }
})

app.get("/grocery/carts", async (req, res) => {
    try {
        const carts = await Cart.find({});
        res.send(carts);
    } catch (err) {
        console.error("Error fetching cart data:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.delete("/grocery/carts", async (req, res) => {
    try {
        await Cart.deleteMany({}); 
        res.send({ message: "Cart cleared successfully" });
    } catch (err) {
        console.error("Error clearing cart:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port,()=>{
    console.log(`Server is running at https://localhost/${port}`);
})