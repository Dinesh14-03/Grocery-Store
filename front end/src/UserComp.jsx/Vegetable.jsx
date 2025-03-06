import React, { useState } from "react";
import Vegetablecard from "./Vegetablecard";
export default function Vegetables() {
  const [i, seti] = useState(false);

  const showvegi = () => {
    seti(true);
  };

  return (
    <div>
      {!i ? (
        <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
        <div className="noncard">
                <img
                  src="https://media.istockphoto.com/id/1207271995/photo/stir-frying-and-sauteing-a-variety-of-fresh-colorful-market-vegetables-in-a-hot-steaming-wok.jpg?b=1&s=612x612&w=0&k=20&c=82Hvr4hXkop4DHYhrSZSBPyIfcaNrKR3FFVeLAx7RPc="
                  alt="Vegatables"
                  height={200}
                  width={200}
                  onClick={showvegi}
                  style={{ cursor: "pointer" }}
                />
             </div>
             <div>
              <h1  style={{fontFamily:"Papyrus,comic Sans MS,fantasy"}}>Welcome To The Vegetable Block!..</h1>
              <p>While we often call them vegetables, tomatoes are actually classified as a fruit, and it took a Supreme Court ruling in 1893 to consider them a vegetable for culinary purposes;. Spinach gained its "superfood" status thanks to Popeye the Sailor Man, who was famously depicted gaining strength from eating it;. Although we call them berries, strawberries are botanically not considered true berries. Potatoes, a staple food, were originally cultivated by indigenous people in the Andes Mountains of South America. Garlic, with its sulfur compounds, can act as a natural mosquito repellent. </p>
             </div>
             </div>
      ) : (
        <Vegetablecard />
      )}
    </div>
  );
}
