import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
export default function Form(){
    const navigate=useNavigate();
    const handlefun = (e)=>{
        e.preventDefault();
        const name = document.getElementById("name").value;
        const number = document.getElementById("num").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
    
        const formData = {
            name : name,
            number : number,
            email : email,
            password : password
        }
        axios
        .post("http://localhost:4000/grocery/users",formData)
        .then((res)=>{
            alert("Registered successfully!");
            console.log(`running successfully`);
        })
        .catch((err)=>{
            console.log(`the error has been detected ${err}`);
        })
         navigate("/")
    }
    return(
        <>
        <center>
        <div className="form">
        <form onSubmit={handlefun}>
        <CgProfile style={{fontSize:"70px"}}/><br/><br/>
        <label>Please Login Here!</label><br/><br/>
        <label>Name : </label>
        <input type="text" placeholder="Enter Your Name" id="name" className="search-input"required></input><br/><br/>
        <label>Mobile : </label>
        <input type="number" placeholder="Enter your Mobile" id="num" className="search-input"required></input><br/><br/>
        <label>Gmail : </label>
        <input type="email" placeholder="Enter your Gmail" id="email" className="search-input"required></input><br/><br/>
        <label>Password : </label>
        <input type="password" placeholder="Enter your pass" id="password" className="search-input"required></input><br/><br/>
        <button type="submit" className="form-button+">submit</button>
        </form>
        </div>
        </center>
        </>
    )
}