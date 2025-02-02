import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch( MENU_API +resId );
    const json = await data.json();
    console.log(json); 
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards?.find(
    (card) => card.card?.card?.info
  )?.card?.card?.info;



  const menuSection = resInfo?.cards?.find(
    (card) => card.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;



  const itemCards = menuSection
    ?.map((section) => section?.card?.card?.itemCards)
    .filter(Boolean)
    .flat();

    
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards && itemCards.length > 0 ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - ₹
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))
        ) : (
          <p>No menu items found</p>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;