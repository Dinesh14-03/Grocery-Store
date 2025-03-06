import React from 'react';
import { Link , useNavigate, useLocation} from 'react-router-dom';  
import { FaHome,FaSearch,FaAppleAlt } from "react-icons/fa";
import { TbShoppingCartMinus } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GiTomato,GiSoap,GiChocolateBar } from "react-icons/gi";
import { BiRestaurant } from "react-icons/bi";
import logo from "../images/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q') || '';

  const handleSearchChange = (e) => {
    const query = e.target.value;
    const currentPath = location.pathname;
    navigate(`${currentPath}?q=${encodeURIComponent(query)}`);
  };
  return (
    <header>
      <div className="design" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img src={logo} alt="logo" width={150} height={150} />
      <span>Grocery Store</span></div>
      <nav>
        <ul>
          <li><Link to="/" className="a"><FaHome />Home</Link></li>
          <li><Link to="/fruits" className="a"><FaAppleAlt />Fruits</Link></li>
          <li><Link to="/vegetables" className="a"><GiTomato/>Vegetables</Link></li>
          <li><Link to="/grocery" className="a"><BiRestaurant/>Grocery</Link></li>
          <li><Link to="/Washi" className="a"><GiSoap/>Cleansers</Link></li>
          <li><Link to="/Diary" className="a">< GiChocolateBar/>Dairy</Link></li>
          <li><FaSearch className="search-icon"/>
          <input type="text" placeholder="Search..." className="search-input" value={searchQuery}
          onChange={handleSearchChange}/></li>
          <li><Link to="/Cart" className="a"><TbShoppingCartMinus/>Cart</Link></li>
          <li><Link to="/Form" className="a"><CgProfile />Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}
