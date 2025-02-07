import {LOGO_URL} from "../utils/constants";
import { useState, useEffect, } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
    const [btnNameReact, setbtnNameReact] = useState("Login");
    
    const onlineStatus = useOnlineStatus();

    //if no dependency array => useEffect is called on every render
    //if dependency array is empty = [] => useEffect is called on initial render (just once) 
    //if dependency array is [btnNameReact] => called every time btnNameReact is updated

    useEffect(()=>{
        console.log("useEffect rendered");
    }, [btnNameReact]);
    return(
        <div className="flex justify-between bg-red-100">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} 
                />
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4">
                    <li>
                        Online Statue :{onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to = "/contact">Contact us</Link>
                    </li>
                    <li>
                        <Link to = "/grocery">Grocery</Link>
                    </li>
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