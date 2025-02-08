import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Home, Info, Phone, ShoppingCart, Store } from "lucide-react";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("useEffect rendered");
  }, [btnNameReact]);

  return (
    <div className="flex justify-between items-center bg-gray-900 shadow-lg px-5 py-2">
      {/* Logo and Restaurant Name */}
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img className="w-20 rounded-full" src={LOGO_URL} alt="Website Logo" />
        </Link>
        <h1 className="text-white text-3xl font-bold ">JAY DA DABHA</h1>
      </div>

      <div className="flex items-center">
        <ul className="flex items-center space-x-8 text-white font-semibold">
          <li className="flex items-center space-x-2 text-xl">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="flex items-center space-x-2 text-xl">
            <Home className="w-5 h-5" aria-label="Home" />
            <Link to="/">Home</Link>
          </li>
          <li className="flex items-center space-x-2 text-xl">
            <Info className="w-5 h-5" aria-label="About" />
            <Link to="/about">About us</Link>
          </li>
          <li className="flex items-center space-x-2 text-xl">
            <Phone className="w-5 h-5" aria-label="Contact" />
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="flex items-center space-x-2 text-xl">
            <Store className="w-5 h-5" aria-label="Grocery" />
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="flex items-center space-x-2 text-xl">
            <ShoppingCart className="w-5 h-5" aria-label="Cart" />
            <span>Cart</span>
          </li>
          <button
            className="bg-white text-orange-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
            onClick={() =>
              setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
