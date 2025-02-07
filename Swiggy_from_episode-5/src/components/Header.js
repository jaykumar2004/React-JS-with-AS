import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Home, Info, Phone, ShoppingCart, Store } from "lucide-react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //if no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render (just once)
  //if dependency array is [btnNameReact] => called every time btnNameReact is updated

  useEffect(() => {
    console.log("useEffect rendered");
  }, [btnNameReact]);
  return (
    <div className="flex justify-between items-center bg-orange-400 shadow-lg px-6 py-3">
      <div className="logo-container">
        <Link to="/">
          <img className="w-30" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center space-x-8 text-white font-semibold">
          <li className="flex items-center space-x-2 text-xl">
            Online Statue :{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="flex items-center space-x-2 text-xl">
            <Home size={20} />
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center space-x-2 text-xl">
            <Info size={20} />
            <Link to="/about">About us</Link>
          </li>
          <li className="flex items-center space-x-2 text-xl">
            <Phone size={20} />
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="flex items-center space-x-2 text-xl">
            <Store size={20} />
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="flex items-center space-x-2 text-xl">
          <ShoppingCart size={20} />
            <span>Cart</span>
            </li>
          <button
            className="bg-white text-orange-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
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
