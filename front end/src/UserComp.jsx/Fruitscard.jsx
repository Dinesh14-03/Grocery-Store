import axios from "axios";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useSearchParams } from 'react-router-dom';

const FruitCard = ({ image, name, price ,actual , quans}) => {
  const [count, setCount] = useState(0);

  const AddToCart = () => setCount((prev) => prev + 1);
  const ReduceFromCart = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  const handlefunction = (e) => {
    e.preventDefault();
    
    const cartdata = {
         name : name,
         actualPrice : actual,
         discountPrice : price,
         price : count * price
    }
    axios
    .post("https://grocery-store-coa9.onrender.com/grocery/carts",cartdata)
    .then((res)=>{
      console.log(`running successfully`);
      alert("Item added to cart!");
  })
  .catch((err)=>{
      console.log(`the error has been detected ${err}`);
      alert("Failed to add item to cart. Please try again."); 
  })
  }
  const discount = actual > 0 ? Math.round(((actual - price) / actual) * 100) : 0;
  return (
    <div className="inside">
      <table>
        <tbody>
          <tr>
            <td>
            <div  className="image-container">
              {discount > 0 && <div className="discount-badge">{discount}% OFF</div>}
                <img  className="imageAlign" src={image} alt={name} height={200} width={200}/>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <p>
              <span className="price">
               <FaRupeeSign /><strong>{price}</strong>
                {actual > 0 && (
                 <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "2px",
                    color : "grey"}}>
                  <LiaRupeeSignSolid /><strike>{actual}</strike>
                 </span>
                )}
               <strong style={{ marginLeft: "30px" }}>{name}</strong>
              </span>
              <p style={{fontSize:"14px" , color:"grey"}}>Quantity : {quans}</p>
              </p>
              <button className="add-button" onClick={AddToCart}>
               Pick {count > 0 ? `[${count}]` : ""}
              </button>
              <button className="reduce-button" onClick={ReduceFromCart}>
                Reduce
              </button>
              <button  className="reduce-button" onClick={handlefunction}>
                Add to Cart
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default function Fruitscard() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const fruitsData = [
    { 
      name: "Apple",
      price: 150,
      actual:200,
      quans :"1 kg",
      image: "https://images.pexels.com/photos/574919/pexels-photo-574919.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Pineapple",
      price: 110,
      actual:120,
      quans :"1 kg",
      image: "https://images.pexels.com/photos/2868966/pexels-photo-2868966.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Watermelon",
      price: 100,
      actual:120,
      quans :"1 piece",
      image: "https://images.pexels.com/photos/3607/fruit-melon-watermelon.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Mango",
      price: 90,
      quans :"500 gram",
      image: "https://images.pexels.com/photos/7788435/pexels-photo-7788435.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Blueberry",
      price: 420,
      actual:500,
      quans :"500 gram",
      image: "https://images.pexels.com/photos/3628062/pexels-photo-3628062.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Raspberry",
      price: 270,
      actual:300,
      quans :"500 gram",
      image: "https://images.pexels.com/photos/52536/raspberry-fruits-fresh-red-52536.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Pomegranate",
      price: 120,
      quans :"1 kg",
      image: "https://images.pexels.com/photos/7033902/pexels-photo-7033902.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Orange",
      price: 170,
      quans :"500 gram",
      image: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Banana",
      price: 50,
      quans :"10 pcs",
      image: "https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Guava",
      price: 65,
      actual:70,
      quans :"500 gram",
      image: "https://media.istockphoto.com/id/174853509/photo/guava-fruits.jpg?b=1&s=612x612&w=0&k=20&c=033B3cjlHoljlgeXiWduuIFi4d84_DroASxzZlBGdjg=",
    },
    {
      name: "Papaya",
      price: 30,
      quans :"1 piece",
      image: "https://images.pexels.com/photos/5945739/pexels-photo-5945739.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Dragon Fruit",
      price: 250,
      quans :"1 piece",
      image: "https://images.pexels.com/photos/1437598/pexels-photo-1437598.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name : "Strawberry",
      price : 200,
      actual : 225,
      quans : "1 pack (10 pcs)",
      image : "https://images.pexels.com/photos/407040/strawberry-water-splashes-splash-drop-of-water-407040.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name : "Kiwi",
      price : 150,
      actual : 190,
      quans : "250 gram",
      image : "https://images.pexels.com/photos/7585533/pexels-photo-7585533.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name : "Grapes",
      price : 100,
      quans : "500 gram",
      image : "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name : "Dates",
      price : 300,
      actual : 350,
      quans : "500 gram",
      image : "https://media.istockphoto.com/id/181077887/photo/dates.webp?a=1&b=1&s=612x612&w=0&k=20&c=TCkUhVLanzOJ4a-YJKbb-I07EolSUAf0qLvrbF0Uo50=",
    },
    
  ];
  const filteredFruits = fruitsData.filter(fruit =>
    fruit.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
 

  return (
    <div className="comp">
      {filteredFruits.length > 0 ? (
        filteredFruits.map((fruit) => (
          <FruitCard {...fruit} />
        ))
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", color: "red" }}>
          Oops..! No such product found...
        </p>
      )}
    </div>
  );
}
