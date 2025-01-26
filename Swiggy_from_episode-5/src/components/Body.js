import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {

    //local state variable - Super Powerful variable
    const [ListOfResturant, setListOfResturant] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button
                className= "filter-btn"
                onClick = {()=> {
                    setListOfResturant()
                    const filteredList = ListOfResturant.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setListOfResturant(filteredList);
                }}>
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                  ListOfResturant.map(resturant => <RestaurantCard key={resturant.info.id} resData={resturant}/>)
                }
            </div>
        </div>
    );
}
export default Body;