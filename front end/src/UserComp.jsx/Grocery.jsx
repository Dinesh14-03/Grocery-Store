import React, { useState } from "react";
import Grocerycard from "./Grocerycard";

export default function Grocery() {
  const [k, setk] = useState(false);

  const showgrocery = () => {
    setk(true);
  };

  return (
    <div>
      {!k ? (
        <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
        <div className="noncard">
                <img
                  src="https://images.pexels.com/photos/2802527/pexels-photo-2802527.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Grocery"
                  height={200}
                  width={200}
                  onClick={showgrocery}
                  style={{ cursor: "pointer" }} 
                />
              </div>
              <div>
                <h1 style={{fontFamily:"Papyrus,comic Sans MS,fantasy"}}>Welcome To The Grocery Block!..</h1>
                <p>If you don’t live under a rock, then chances are you’ve heard of Walmart. Within the last few years, they quickly outmatched all of the previous leading grocery store and supermarket chains, now having almost double the annual income of Kroger, the former leading supermarket chain. Of the 63,328 grocery stores in the United States, 38,307 of them are supermarkets. Of those, 4,735 are Walmart locations. That means almost 7.5% of all grocery stores in the US are Walmart stores. 
                 then about 4% of all US land mass would be Walmart stores. </p>
              </div>
              </div>
            
      ) : (
        <Grocerycard/>
      )}
    </div>
  );
}
