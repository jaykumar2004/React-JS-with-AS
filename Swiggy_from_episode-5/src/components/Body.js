import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    // Local state variable
    const [ListOfResturant, setListOfResturant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7655739&lng=75.8536434&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        // Extract restaurant data properly
        const restaurants = json?.data?.cards
            ?.find(card => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            ?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        

        setListOfResturant(restaurants);
        setFilteredRestaurants(restaurants); // Initial state with full list
    };


    //conditional rendering
    // if(ListOfResturant.length ===0){
    //     return <Shimmer/>;
    // }

    return ListOfResturant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
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
            <div className="res-container">
                {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
