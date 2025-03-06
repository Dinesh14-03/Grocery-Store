import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Cart() {
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/grocery/carts");
                setCartData(response.data);
            } catch (err) {
                console.error("Error fetching cart data:", err);
            }
        };

        fetchCartData();
    }, []);

    const tableStyle = {
        border: "2px solid black",
        borderCollapse: "collapse",
        width: "100%",
        background : "lightblue",
    };

    const cellStyle = {
        border: "1px solid black",
        padding: "10px",
        textAlign: "center",
    };
    const navigate=useNavigate();

     const handlePlaceOrder = async () => {
        try {
            await axios.delete("http://localhost:4000/grocery/carts");
            setCartData([]); 
            alert("Order placed successfully!");
            navigate("/"); 
        } catch (err) {
            console.error("Error placing order:", err);
            alert("Failed to place the order. Please try again.");
        }
    };
    const totalPrice = cartData.reduce((total,item)=>total + item.price,0);

    return (
        <div>
            <h2>Cart Items</h2>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={cellStyle}> S.No </th>
                        <th style={cellStyle}> Product Name </th>
                        <th style={cellStyle}> Actual Price </th>
                        <th style={cellStyle}> Discount Price </th>
                        <th style={cellStyle}> Price </th>
                    </tr>
                </thead>
                <tbody>
                    {cartData.map((item, index) => (
                        <tr key={item._id}>
                            <td style={cellStyle}>{index + 1}</td>
                            <td style={cellStyle}>{item.name}</td>
                            <td style={cellStyle}>{item.actualPrice}</td>
                            <td style={cellStyle}>{item.discountPrice}</td>
                            <td style={cellStyle}>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4} style={{ ...cellStyle , textAlign: "right", fontWeight: "bold" }}>Total Price:</td>
                        <td style={{...cellStyle, fontWeight: "bold" }}>{totalPrice}</td>
                    </tr>
                </tfoot>
            </table><br></br>
            <div>
                <h3  style={{fontFamily:"Papyrus,comic Sans MS,fantasy"}}>Thank You for Purchasing From Our Store 👍 Visit Again With Heartful Love !....❤️</h3>
                <h3 style={{fontFamily:"Papyrus,comic Sans MS,fantasy"}}>Please Click👇Ok Button To Place The Order</h3>

                <div style={{display:"flex",gap:"20px"}}>
                    <button className="add-button" onClick={handlePlaceOrder}>Ok</button>
                    <button className="add-button">Cancel</button>
                </div>
            </div>
        </div>
    );
}