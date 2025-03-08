import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Form(){
    const navigate=useNavigate();
    const handlefun = async(e)=>{
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
        };

         try {
            const response = await axios.get(`http://localhost:4000/grocery/users?email=${email}`);
            if (response.data.length > 0) {
                alert("Account already registered!");
            } else {
                await axios.post("http://localhost:4000/grocery/users", formData);
                alert("Registered successfully!");
                navigate("/login");
            }
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    };

    return(
        <>
        <center>
        <div className="form">
        <form onSubmit={handlefun}>
        <CgProfile style={{fontSize:"70px"}}/><br/><br/>
        <label>Please SignUp Here!</label><br/><br/>
        <label>Name : </label>
        <input type="text" placeholder="Enter Your Name" id="name" className="search-input"required></input><br/><br/>
        <label>Mobile : </label>
        <input type="number" placeholder="Enter your Mobile" id="num" className="search-input"required></input><br/><br/>
        <label>Gmail : </label>
        <input type="email" placeholder="Enter your Gmail" id="email" className="search-input"required></input><br/><br/>
        <label>Password : </label>
        <input type="password" placeholder="Enter your pass" id="password" className="search-input"required></input><br/><br/>
        <button type="submit" className="form-button">submit</button>
        <p>Already have an Account ? <Link to="/login">Login Here</Link></p>
        </form>
        </div>
        </center>
        </>
    )
}