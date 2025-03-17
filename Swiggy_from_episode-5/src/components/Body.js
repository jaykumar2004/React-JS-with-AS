import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link, useOutletContext } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
  // State variables
  const [ListOfResturant, setListOfResturant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { searchText } = useOutletContext();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filter restaurants based on search text
    const filtered = ListOfResturant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [searchText, ListOfResturant]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.77508727955646&lng=75.85139371454716&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    // Extract restaurant data properly
    const restaurants =
      json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfResturant(restaurants);
    setFilteredRestaurants(restaurants); // Set both states initially
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks Like you're Offline!!! Please Check your Internet Connection
      </h1>
    );

  const { loggedUser, setUserName } = useContext(UserContext);

  return ListOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body min-h-screen p-4">
      {/* Filter and Search Section */}
      <div className="filter flex justify-between items-center m-4">
        {/* Left: Top Rated Button */}
        <div className="top-rated-btn flex items-center">
          <button
            className="px-4 py-2 bg-orange-400 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredList = ListOfResturant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="top-rated-btn flex items-center">
          <label className="font-bold text-2xl p-2">User Name : </label>
          <input 
            className="border border-black p-1 rounded-lg"
            value={loggedUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      {/* Render Restaurant Cards with Grid Layout */}
      <div className="grid grid-cols-5 gap-2">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
