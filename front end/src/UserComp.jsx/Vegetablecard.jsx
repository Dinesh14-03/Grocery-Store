import axios from "axios";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useSearchParams } from "react-router-dom"; 

const VegetableCards = ({ image, name, price,actual,quans }) => {
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

export default function Vegetablecard() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  const vegsData = [
    {
      name: "Tomato",
      price: 20,
      actual:30,
      image: "https://images.pexels.com/photos/96616/pexels-photo-96616.jpeg?auto=compress&cs=tinysrgb&w=600",
      quans : "500 gram",
    },
    {
      name: "Carrot",
      price: 30,
      quans : "250 gram",
      image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Onion",
      price: 40,
      actual:50,
      quans : "1 kg",
      image: "https://images.pexels.com/photos/1292984/pexels-photo-1292984.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Ginger",
      price: 70,
      actual:90,
      quans : "500 gram",
      image: "https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Corn",
      price: 20,
      quans : "1 pcs",
      image: "https://images.pexels.com/photos/547264/pexels-photo-547264.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Cauli Flower",
      price: 50,
      actual:65,
      quans : "1 pcs",
      image: "https://media.istockphoto.com/id/1371203923/photo/close-up-of-cauliflower-on-table.jpg?b=1&s=612x612&w=0&k=20&c=NWXru5mulxUMHpFHSkkILVzihpn86Awa9UTNOoBXxjA=",
    },
    {
      name: "Spinach",
      price: 10,
      actual : 20,
      quans : "1 bunch",
      image: "https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Ladies Finger",
      price: 20,
      quans : "100 gram",
      image: "https://media.istockphoto.com/id/507180560/photo/okras-with-raw-okra-in-farm.jpg?b=1&s=612x612&w=0&k=20&c=NRpHiuHJ6xiTbPmMOYgCFocy7idtR4TdbtFvcghU-v4=",
    },
    {
      name: "Potato",
      price: 40,
      actual:50,
      quans : "500 gram",
      image: "https://media.istockphoto.com/id/619756376/photo/raw-potato.jpg?b=1&s=612x612&w=0&k=20&c=OFlW4UzAwZ9FtlrR3-aQeR-_vwWcerqOillkaDhJ6fs=",
    },
    {
      name: "Radish",
      price: 40,
      actual:50,
      quans : "500 gram",
      image: "https://media.istockphoto.com/id/1319057808/photo/raphanus-raphanistrum%C2%A0subsp-in-black-background.jpg?b=1&s=612x612&w=0&k=20&c=Dk0aD-NyfHtJ9ySj4h2X365SmOmjLb7XMm0R8scXtcw=",
    },
    {
      name: "Cabbage",
      price: 30,
      quans : "1 pcs",
      image: "https://images.pexels.com/photos/2518893/pexels-photo-2518893.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Green Peas",
      price: 40,
      quans : "1 pack",
      image: "https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Brinjal",
      price: 40,
      actual:50,
      quans : "500 gram",
      image: "https://media.istockphoto.com/id/173879887/photo/eggplants-isolated.jpg?b=1&s=612x612&w=0&k=20&c=wOxMfG8zKnLUTsNxMrbJWo_O-NrSevXbve67AYgIwmc=",
    },
    {
      name: "Chilli",
      price: 60,
      quans : "1 pack",
      image: "https://images.pexels.com/photos/39390/chili-pepper-red-spicy-drying-39390.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Bottle Gourd",
      price: 30,
      actual:50,
      quans : "500 gram",
      image: "https://images.pexels.com/photos/27548029/pexels-photo-27548029/free-photo-of-a-gourd-hanging-from-a-vine-with-leaves.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Beet Root",
      price: 25,
      quans : "250 gram",
      image: "https://images.pexels.com/photos/244393/pexels-photo-244393.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const filteredVegs = vegsData.filter((veg) =>
    veg.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="comp">
      {filteredVegs.length > 0 ? (
        filteredVegs.map((veg) => (
          <VegetableCards {...veg} />
        ))
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", color: "red" }}>
          Oops...! No such product found..
        </p>
      )}
    </div>
  );
}