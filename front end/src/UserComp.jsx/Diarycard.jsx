import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useSearchParams } from "react-router-dom"; 

const DiaryCards = ({ image, name, price,actual,quans}) => {
  const [count, setCount] = useState(0);

  const AddToCart = () => setCount((prev) => prev + 1);
  const ReduceFromCart = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
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

export default function Diarycard() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
    const dairyData = [
      {
        name: "Milk",
        price: 50,
        actual:60,
        quans:"250 ml",
        image: "https://media.istockphoto.com/id/535489242/photo/pouring-milk-in-the-glass-on-the-background-of-nature.jpg?b=1&s=612x612&w=0&k=20&c=w0p_I7EMcJFK2o2kPMs7CBeg2tYr2vPilI3zfgcHf-Y=",
      },
      {
        name: "Butter",
        price: 110,
        actual:120,
        quans:"250 gram",
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/butter/v/m/3/-original-imagkjwdn2fe6grb.jpeg?q=70",
      },
      {
        name: "Paneer",
        price: 110,
        quans:"250 gram",
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/paneer-tofu/t/t/k/-original-imagnjphzbark2uk.jpeg?q=70",
      },
      {
        name: "Dairy Milk",
        price: 90,
        actual:100,
        quans:"1 pcs",
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/chocolate/6/z/k/110-dairy-milk-silk-bubbly-chocolate-dairy-milk-silk-oreo-original-imagrk7svgdm7yxg.jpeg?q=70",
      },
      {
        name: "Cheese",
        price: 110,
        quans:"250 gram",
        image: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
      {
        name: "Curd",
        price: 30,
        quans:"250 gram",
        image: "https://media.istockphoto.com/id/1049728740/photo/plain-curd-or-yogurt-or-dahi-in-hindi-served-in-a-bowl-over-moody-background-selective-focus.jpg?b=1&s=612x612&w=0&k=20&c=n79I3JFKAN1L3jXMQ3A5hXJgSl4R_ARXkgV4ymWd8Kc=",
      },
      {
        name: "Condensed Milk",
        price: 70,
        actual:110,
        quans:"250 gram",
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/milk/t/k/k/-original-imagygz4yzvpbfaq.jpeg?q=70",
      },
      {
        name: "Ice Creams",
        price: 40,
        actual:50,
        quans:"1 pcs",
        image: "https://media.istockphoto.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?b=1&s=612x612&w=0&k=20&c=3NWTvoln9aInWFBsdJpxMmzR_fshHCgmA3tpJnlWBcs=",
      },
      {
        name: "Milk Powder",
        price: 60,
        quans:"250 gram",
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/milk-powder/e/j/u/500-100-pure-natural-perfect-for-tea-coffee-for-everyday-use-1-original-imah86zfbqngnkjs.jpeg?q=70",
      },
      {
        name: "Milky Bar",
        price: 40,
        quans:"1 pcs",
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/chocolate/o/o/g/-original-imah7fegangvvrgq.jpeg?q=70",
      },
      {
        name: "Milk Peda",
        price: 90,
        actual:120,
        quans:"250 gram (or) 10 pcs",
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sweet-mithai/o/q/v/500-mathura-doodh-peda-milk-peda-1-peda-delight-foods-original-imah62d4j4nnv9kx.jpeg?q=70",
      },
      {
        name: "Whipped Cream",
        price: 175,
        actual:200,
        quans:"250 gram",
        image: "https://rukminim2.flixcart.com/image/612/612/keg02a80/baking-decorative/q/h/h/450-whipping-cream-powder-bakerswhip-original-imafv4atg8v5tzef.jpeg?q=70",
      },

    ]
    const filtereddiary = dairyData.filter((diary) =>
      diary.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
      <div className="comp">
        {filtereddiary.length > 0 ? (
          filtereddiary.map((diary, index) => (
            <DiaryCards key={index} {...diary} />
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "18px", color: "red" }}>
            Oops...! No such product found..
          </p>
        )}
      </div>
    );
  }