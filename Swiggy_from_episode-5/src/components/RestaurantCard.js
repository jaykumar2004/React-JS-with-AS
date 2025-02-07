import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] h-[380px] rounded-2xl bg-gray-100 hover:bg-gray-200 flex flex-col">
      <img
        className="rounded-2xl h-[160px] object-cover mb-4"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="flex flex-col flex-grow justify-between">
        <h3 className="font-bold text-lg mb-2 truncate">{name}</h3>
        <h4 className="text-sm mb-2">{cuisines.join(", ")}</h4>
        <h4 className="text-sm mb-2">{avgRating}⭐</h4>
        <h4 className="text-sm mb-2">{costForTwo}</h4>
        <h4 className="text-sm truncate">{sla?.deliveryTime} min</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
