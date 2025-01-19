import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";


const Body = () => {
    return(
        <div className="body">
            <div className="filter">
                <button className= "filter-btn" onClick = {()=> {}}>
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                  resList.map(resturant => <RestaurantCard key={resturant.info.id} resData={resturant}/>)
                }
            </div>
        </div>
    );
}
export default Body;