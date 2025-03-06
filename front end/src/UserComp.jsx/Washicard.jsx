import {useState} from "react";
import { FaRupeeSign } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useSearchParams } from 'react-router-dom';

const Washicards=({name,image,price,actual,quans})=>{
  const [cnt,setcnt]=useState(0);
  const AddToCart = ()=>setcnt((prev)=>prev+1);
  const ReduceFromCart = ()=>setcnt((prev)=>(prev>0)?prev-1:0);
  const discount = actual > 0 ? Math.round(((actual - price) / actual) * 100) : 0;
  return(
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
                Pick {cnt > 0 ? `[${cnt}]` : ""}
              </button>
              <button className="reduce-button" onClick={ReduceFromCart}>
                Reduce
              </button>
              <button className="reduce-button">
                Add to Cart
              </button>
            </td>
          </tr>
       </tbody>
      </table>
    </div>
  );
};
export default function Washicard(){
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const Washidata=[
    {
    name:"Soap",
    image:"https://rukminim2.flixcart.com/image/612/612/xif0q/soap/x/t/a/-original-imah3sd9tnghphs4.jpeg?q=70",
    price:72,
    actual:90,
    quans : "3 pcs"
    },
    {
      name:"Shampoo",
      image:"https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-shampoo/8/w/n/100-anti-dandruff-shampoo-upto-100-dandruff-reduction-with-original-imah4gczqjdmggf7.jpeg?q=70",
      price:110,
      actual:120,
      quans : "1 250ml pack"
    },
    {
        name:"Liquid",
        image:"https://rukminim2.flixcart.com/image/612/612/xif0q/liquid-detergent/v/v/j/-original-imags56brhx7jafy.jpeg?q=70",
        price:210,
        quans : "1 1l pack"
    },
    {
      name:"Moisturizer",
      image:"https://images.pexels.com/photos/12346630/pexels-photo-12346630.jpeg?auto=compress&cs=tinysrgb&w=600",
      price:100,
      actual:120,
       quans : "1 pack"
    },
    {
      name:"Room Spray",
      image:"https://images.pexels.com/photos/17765045/pexels-photo-17765045/free-photo-of-a-spray-bottle-on-a-wooden-board.jpeg?auto=compress&cs=tinysrgb&w=600",
      price:210,
      actual:240,
      quans : "1 250ml pack"
    },
    {
      name:"Tooth Paste",
      image:"https://images.pexels.com/photos/298611/pexels-photo-298611.jpeg?auto=compress&cs=tinysrgb&w=600",
      price:75,
      actual:90,
       quans : "1 pack"
    },
    {
      name:"Powder",
      image:"https://rukminim2.flixcart.com/image/612/612/kpft18w0/talc/m/v/c/150-cologue-cool-powder-shower-to-shower-original-imag3zcqgehxxrby.jpeg?q=70",
      price:65,
      actual:90,
       quans : "1 250g pack"
    },
    {
      name:"Serum",
      image:"https://rukminim2.flixcart.com/image/612/612/xif0q/fairness/d/l/a/10-vitamin-c-daily-glow-face-serum-with-vitamin-c-turmeric-for-original-imagmgq3yrgnznft.jpeg?q=70",
      price:90,
      actual:100,
       quans : "1 250ml pack"
    },
  ]
  const filteredwashi = Washidata.filter(washi =>
    washi.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="comp">
      {filteredwashi.length > 0 ? (
        filteredwashi.map((washi, index) => (
          <Washicards key={index} {...washi} />
        ))
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", color: "red" }}>
          Oops...! No such product found..
        </p>
      )}
    </div>
  );
}  

