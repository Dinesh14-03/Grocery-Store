import React, { useState } from "react";
import Fruitscard from "./Fruitscard";

export default function Fruits() {
  const [data,setdata] = useState(false);

  const showFruits = () => {
    setdata(true);
  };

  return (
    <div>
      {!data ? (
        <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
           <div className="noncard">
                <img
                  src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Fruits"
                  height={200}
                  width={200}
                  onClick={showFruits}
                  style={{ cursor: "pointer"}} 
                />
              </div>
              <div>
                <h1 style={{fontFamily:"Papyrus,comic Sans MS,fantasy"}}>Welcome To The Fruits Block!..</h1>
                <p>Did you know that apples are actually related to roses, sharing the same botanical family, making them "cousins"?. While many think oranges are the top source of vitamin C, kiwis actually contain significantly more of this essential nutrient. A unique fact about apples is that they float in water due to their high air content, which makes up around 25% of their volume. Some farmers in Japan even grow watermelons in cube shapes to save space in refrigerators. And speaking of unusual fruits, starfruit is also called a carambola. </p>
                </div>
                </div>
      ) : (
        <Fruitscard/>
      )}
    </div>
  );
}
