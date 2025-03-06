import React, { useState } from "react";
import Washicard from "./Washicard";
const imageAlign = {
  borderRadius: "10px",
  objectFit: "cover",
  cursor: "pointer",
};  
export default function Washi() {
  const [j, setj] = useState(false);

  const showWashi = () => {
    setj(true);
  };

  return (
    <div >
      {!j ? (
        <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
        <div className="noncard">
                <img
                  src="https://images.pexels.com/photos/6690891/pexels-photo-6690891.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Cleanser"
                  height={200}
                  width={200}
                  style={imageAlign}
                  onClick={showWashi}
                />
             </div>
             <div>
              <h1 style={{fontFamily:"Papyrus,comic Sans MS,fantasy"}}>Welcome To The Cleanser Block!..</h1>
              <p>Bar soap has an alkaline pH (in the area of 9 to 10), and the pH of a healthy skin surface is around 4.7 on average.[1] This means that soap can change the balance present in the skin to favor the overgrowth of some types of bacteria, increasing acne. In order to maintain a healthy pH balance and skin health, your skin must sit on the proper pH level; some individuals who use bar soap choose to use pH-balancing toners after cleaning in attempts to compensate for the alkalinity of their soaps.</p>
             </div>
             </div>
      ) : (
        <Washicard/>
      )}
    </div>
  );
}
