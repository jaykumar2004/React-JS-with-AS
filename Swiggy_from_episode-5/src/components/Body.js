import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State variables
  const [ListOfResturant, setListOfResturant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

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

        {/* Right: Search Box */}
        <div className="search flex items-center">
          <input
            type="text"
            className="border border-solid border-black px-3 py-2 rounded-lg"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-orange-100 ml-2 rounded-lg cursor-pointer"
            onClick={() => {
              const filteredRestaurant = ListOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Render Restaurant Cards with Grid Layout */}
      <div className="grid grid-cols-5 gap-2">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
