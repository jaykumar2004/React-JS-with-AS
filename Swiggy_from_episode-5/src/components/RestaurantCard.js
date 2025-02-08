import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[280px] h-[420px] rounded-2xl bg-gray-100 hover:bg-gray-200 shadow-lg transition duration-300 transform hover:scale-105 flex flex-col">
      {/* Restaurant Image */}
      <img
        className="rounded-2xl h-[180px] w-full object-cover mb-4"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Content Section */}
      <div className="flex flex-col flex-grow">
        {/* Restaurant Name */}
        <h3 className="font-bold text-lg italic font-cursive text-gray-900 leading-tight mb-1 truncate">
          {name}
        </h3>

        {/* Cuisines */}
        <h4 className="text-sm text-gray-600 mb-1 line-clamp-2">
          {cuisines.join(", ")}
        </h4>

        {/* Ratings & Cost */}
        <div className="flex justify-between text-gray-700 font-semibold mb-1">
          <h4 className="text-md">{avgRating} ⭐</h4>
          <h4 className="text-md">{costForTwo}</h4>
        </div>

        {/* Delivery Time */}
        <h4 className="text-md text-orange-500 font-bold mt-auto">
          🚀 {sla?.deliveryTime} min delivery
        </h4>
      </div>
    </div>
  );
};


//higher order component:
//input - RestaurantCard ==>>RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
  return (props) =>{
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
} 

export default RestaurantCard;
