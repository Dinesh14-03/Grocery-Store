import React, { useContext } from 'react';
import { CgProfile } from "react-icons/cg";
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios';
import { UserContext } from './UserContext';

export default function Login() {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await axios.get(`http://localhost:4000/grocery/users?email=${email}&password=${password}`);
            if (response.data.length > 0) {
                login(response.data[0]); 
                alert("Login successful!");
                navigate("/"); 
            } else {
                alert("Invalid credentials!");
            }
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    };

    return (
        <>
            <center>
                <div className="form">
                    <form onSubmit={handleLogin}>
                        <CgProfile style={{ fontSize: "70px" }} /><br /><br />
                        <label>Please Login Here!</label><br /><br />
                        <label>Gmail : </label>
                        <input type="email" placeholder="Enter your Gmail" id="email" className="search-input" required></input><br /><br />
                        <label>Password : </label>
                        <input type="password" placeholder="Enter your pass" id="password" className="search-input" required></input><br /><br />
                        <button type="submit" className="form-button">submit</button>
                        <p><p>New User ? <Link to="/Form">Sign Up</Link></p></p>
                    </form>
                </div>
            </center>
        </>
    );
}