import home from "../images/home.png";
import { Link } from "react-router-dom";
export default function Homies() {
  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <h1>Fresh Groceries Delivered in 10 Minutes!</h1>
          <p>Shop fresh vegetables, fruits, dairy, and more at the best prices.</p>
          <Link to="/fruits"style={{ textDecoration: "none" }}><button className="shop-now-btn">Shop Now</button></Link>
        </div>
        <img src={home} alt="Grocery" className="banner-image" />
      </div>

      <h2 className="section-title">Shop by Category</h2>
      <div className="categories">
        <div className="category-card"><Link to="/vegetables"style={{ textDecoration: "none" }}>
          <img src="https://www.pngplay.com/wp-content/uploads/8/Healthy-Vegetable-PNG-HD-Quality.png"  width={150} height={150}  alt="Vegetables" />
          <p className="st-hm-p">Vegetables</p></Link>
        </div>
        <div className="category-card"><Link to="/fruits"style={{ textDecoration: "none" }}>
          <img src="https://www.pngplay.com/wp-content/uploads/13/Berries-No-Background.png" alt="Fruits" width={150} height={150} />
          <p  className="st-hm-p">Fruits</p></Link>
        </div>
        <div className="category-card"><Link to="/Diary"style={{ textDecoration: "none" }}>
          <img src="https://www.pngplay.com/wp-content/uploads/9/Milk-Splash-Transparent-PNG.png"  width={150} height={150}  alt="Dairy" />
          <p  className="st-hm-p">Dairy</p></Link>
        </div>
        <div className="category-card"><Link to="/grocery"style={{ textDecoration: "none" }}>
          <img src="https://www.pngplay.com/wp-content/uploads/7/Grocery-Items-PNG-HD-Quality.png"  width={150} height={150}  alt="Grocery" />
          <p  className="st-hm-p">Grocery</p></Link>
        </div>
        <div className="category-card"><Link to="/Washi"style={{ textDecoration: "none" }}>
          <img src="https://www.pngplay.com/wp-content/uploads/9/Liquid-Hand-Wash-Transparent-Image.png"  width={150} height={150}  alt="Dairy" />
          <p  className="st-hm-p">Cleansers</p></Link>
        </div>
      </div>
      <div className="delivery-info">
        <h2>Fast & Safe Delivery</h2>
        <p>Get your groceries at your doorstep within 10 minutes!</p>
      </div>
    </>
  );
}
