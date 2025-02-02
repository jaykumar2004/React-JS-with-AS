import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"; 

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
    const restaurants = json?.data?.cards
      ?.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfResturant(restaurants);
    setFilteredRestaurants(restaurants); // Set both states initially
  };

  return ListOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* Search Box */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
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

        {/* Filter Top Rated Restaurants */}
        <button
          className="filter-btn"
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

      {/* Render Restaurant Cards */}
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/"+ restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
