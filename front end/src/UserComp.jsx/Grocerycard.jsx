import axios from "axios"; 
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useSearchParams } from 'react-router-dom';

const GroceryCards = ({ image, name, price,actual,quans }) => {
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
      .post("http://localhost:4000/grocery/carts",cartdata)
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
              <button className="reduce-button" onClick={handlefunction}>
                Add to Cart
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default function Grocerycard() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const groceData = [
    {
      name: "Flour",
      price: 100,
      actual:120,
      quans : "500 gram",
      image: "https://images.pexels.com/photos/6287581/pexels-photo-6287581.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Oil",
      price: 290,
      actual:320,
      quans : "500 ml",
      image: "https://images.pexels.com/photos/10048319/pexels-photo-10048319.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Coffee",
      price: 160,
      actual:200,
      quans : "1 kg pack",
      image: "https://images.pexels.com/photos/7175978/pexels-photo-7175978.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Green Gram",
      price: 45,
      quans : "250 gram",
      image: "https://images.pexels.com/photos/7420816/pexels-photo-7420816.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Dhall",
      price: 80,
      quans : "500 gram",
      image: "https://media.istockphoto.com/id/884698724/photo/heap-of-organic-dal-with-ladle-in-bucket.jpg?b=1&s=612x612&w=0&k=20&c=Eis3_wF_Np5ugvBpuEdm0BQP71Nr_wSMqRPcrilq0xM=",
    },
    {
      name: "Rice",
      price: 520,
      quans : "5 kgs",
      image: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Oats",
      price: 200,
      actual:240,
      quans : "500 gram pack",
      image: "https://images.pexels.com/photos/543730/pexels-photo-543730.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Egg",
      price: 20,
      quans : "5 pcs",
      image: "https://images.pexels.com/photos/2831799/pexels-photo-2831799.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Bread",
      price: 50,
      quans : "1 pack",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/bread-bun/0/r/i/-original-imah8ff3tnfa5shd.jpeg?q=70",
    },
    {
      name: "Jam",
      price: 60,
      actual:65,
      quans : "150 gram jar",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/jam-spread/k/t/b/-original-imaggjzhhtaa5gev.jpeg?q=70",
    },
    {
      name: "Sugar",
      price: 72,
      actual:75,
      quans : "500 gram",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sugar/v/z/r/1-amrit-brown-sugar-pouch-1-brown-sugar-parry-s-crystal-original-imagmvffcdwjeszy.jpeg?q=70",
    },
    {
      name: "Salt",
      price: 30,
      actual:33,
      quans : "1 kg",
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/salt/n/y/y/-original-imagztb9grehgxcg.jpeg?q=70",
    },
  ];
  
  const filteredgroce = groceData.filter(groce =>
    groce.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="comp">
      {filteredgroce.length > 0 ? (
        filteredgroce.map((groce, index) => (
          <GroceryCards key={index} {...groce} />
        ))
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", color: "red" }}>
          Oops...! No such product found..
        </p>
      )}
    </div>
  );
}  
