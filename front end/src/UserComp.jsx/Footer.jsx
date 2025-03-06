import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
export default function Footer() {
    return (
      <footer style={{display:"flex"}}>
        <div>
          <h3>About Us</h3>
            <p><b>Contact : </b>+91 89054 87320</p>
            <p><b>Name : </b>Dinesh</p>
            <p><b>Place : </b>Coimbatore</p>
            </div>
            <div style={{marginBottom:"40px",marginLeft:"400px",alignContent:"center"}}>
              <h3>Rights & Terms </h3>
              <p>© 2025 Grocery Store. All rights reserved.</p>
              <p>
               <a href="#privacy" style={{color:"white"}} >Privacy Policy</a> | 
               <a href="#terms"  style={{color:"white"}} > Terms and Service</a>
              </p>
            </div>
            <div style={{marginLeft:"350px"}}>
              <h3>Follow Us On</h3>
              <a href="https://www.instagram.com/" style={{fontSize:"20px",color:"white"}}><FaInstagram/></a>
              <a href="https://www.youtube.com/" style={{fontSize:"20px",color:"white",marginLeft:"10px"}}><FaYoutube /></a>
              <a href="https://play.google.com/store/games?hl=en" style={{fontSize:"20px",color:"white",marginLeft:"10px"}}><BiLogoPlayStore /></a>
            </div>
      </footer>
    );
  }