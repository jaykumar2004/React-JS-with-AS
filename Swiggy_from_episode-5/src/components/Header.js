import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Home, Info, Phone, ShoppingCart, Store, User } from "lucide-react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import Search from "./Search";

const Header = ({ searchText, onSearch }) => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedUser} = useContext(UserContext);

  console.log(loggedUser);
  useEffect(() => {
    //console.log("useEffect rendered");
  }, [btnNameReact]);


  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" flex justify-between items-center bg-white shadow-lg px-8 py-5 ">
      {/* Logo and Restaurant Name */}
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img className="w-20 rounded-full" src={LOGO_URL} alt="Website Logo" />
        </Link>
        <Link to="/">
          <h1 className="text-serif text-orange-500 text-3xl font-bold ">SWIGGY</h1>
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex items-center space-x-8 text-white font-semibold">
          <li className="flex items-center space-x-2 text-xl text-black font-bold group">
            <Home className="w-5 h-5 group-hover:text-orange-500 transition-colors" aria-label="Home" />
            <Link to="/" className="group-hover:text-orange-500 transition-colors">HOME</Link>
          </li>
          <li className="flex items-center">
            <Search searchText={searchText} onSearch={onSearch} />
          </li>
          <li className="flex items-center space-x-2 text-xl text-black group font-bold">
            <Info className="w-5 h-5 group-hover:text-orange-500 transition-colors" aria-label="About" />
            <Link to="/about" className="group-hover:text-orange-500 transition-colors">About us</Link>
          </li>
          {/* <li className="flex items-center space-x-2 text-xl text-black">
            <Phone className="w-5 h-5" aria-label="Contact" />
            <Link to="/contact">Contact us</Link>
          </li> */}
          {/* <li className="flex items-center space-x-2 text-xl text-black">
            <Store className="w-5 h-5" aria-label="Grocery" />
            <Link to="/grocery">Grocery</Link>
          </li> */}
          
          <li className="flex items-center space-x-2 text-xl text-black group cursor-pointer font-bold">
            <User className="w-5 h-5 group-hover:text-orange-500 transition-colors" aria-label="User" />
            <span className="group-hover:text-orange-500 transition-colors">{loggedUser}</span>
          </li>
          <li className="flex items-center space-x-2 text-xl text-black group font-bold">
            <span>Online Status: {onlineStatus ? "✅" : "🔴"}</span>
          </li>
          <li className="flex items-center space-x-2 text-xl text-black group">
            <ShoppingCart className="w-5 h-5 group-hover:text-orange-500 transition-colors" aria-label="Cart" />
            <Link to="/cart" className="group-hover:text-orange-500 transition-colors font-bold">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="bg-gray-200 text-orange-500 font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-orange-500 hover:text-white transition-all"
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
