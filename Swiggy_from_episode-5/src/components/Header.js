import {LOGO_URL} from "../utils/constants";
import { useState, useEffect, use } from "react";

const Header = () =>{
    const [btnNameReact, setbtnNameReact] = useState("Login");

    //if no dependency array => useEffect is called on every render
    //if dependency array is empty = [] => useEffect is called on initial render (just once) 
    //if dependency array is [btnNameReact] => called every time btnNameReact is updated
    useEffect(()=>{
        console.log("useEffect rendered");
    }, [btnNameReact]);
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button 
                    className="login" 
                    onClick={()=>{ 
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                        }}
                        >
                            {btnNameReact}
                            </button>
                </ul>
            </div>
        </div>
    );
};
export default Header;