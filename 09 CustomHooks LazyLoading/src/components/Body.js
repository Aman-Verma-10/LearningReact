import RestuarantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State Variable - Super powerfull variable
  const [listOfRestruant, setListOfRestruant] = useState([]);
  const [filteredRestaurant, setFilteredRestraunt] = useState([]);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    // console.log("jakvak")
  }, []);

  const fetchData = async () => {
    // corsproxy.io: https://corsproxy.io/?
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9905542&lng=77.7580827&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json)

    // Optional Chaining
    setListOfRestruant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestraunt(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return (<h1>Looks like you're offline!! Please check your internet connection</h1> );

  // Conditional Rendering
  // if(listOfRestruant.length === 0) {
  //   // Shimmer UI
  //   return <Shimmer />;
  // }

  // Conditional rendering
  return listOfRestruant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant cards and update the UI
              const filteredRestaurant1 = listOfRestruant.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestraunt(filteredRestaurant1);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestruant.filter((res) => {
              return res?.info?.avgRating >= 4.6;
            });
            setFilteredRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restraunt) => (
          <Link to={"/restaurant/" + restraunt.info.id} key={restraunt.info.id}>
            <RestuarantCard resData={restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
