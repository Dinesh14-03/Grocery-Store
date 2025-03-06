import React, { useState } from "react";
import Diarycard from "./Diarycard";

const imageAlign = {
  borderRadius: "10px",
  objectFit: "cover",
  cursor: "pointer",
};  
export default function Diary() {
  const [j, setj] = useState(false);

  const showDiary = () => {
    setj(true);
  };

  return (
    <div >
      {!j ? (
        <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
        <div className="noncard">
                <img
                  src="https://media.istockphoto.com/id/941184314/photo/dairy-products-on-blue-wooden-table-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=nJs9--IbLQa7JcJ7qp6tTYHwzwaQSCawJCWBzrYnZf0="
                  alt="Diary"
                  height={200}
                  width={200}
                  style={imageAlign}
                  onClick={showDiary}
                />
             </div>
             <div>
              <h1 style={{fontFamily:"Papyrus,comic Sans MS,fantasy"}}>Welcome To The Dairy Products Block!..</h1>
              <p>🥛 Milk Composition – Cow’s milk is about 87% water and contains proteins, fats, lactose (milk sugar), vitamins, and minerals.
                 🧀 Cheese Variety – There are over 1,800 types of cheese worldwide, each with different textures, flavors, and aging processes.
                 🍦 Ice Cream Origin – Ice cream dates back to at least 200 BCE, when the Chinese mixed milk with rice and froze it using snow.
                 </p>
             </div>
             </div>
      ) : (
        <Diarycard/>
      )}
    </div>
  );
}
