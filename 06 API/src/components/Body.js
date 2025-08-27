import RestuarantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable - Super powerfull variable
  const [listOfRestruant, setListOfRestruant] = useState([]);
  const [filteredRestaurant, setFilteredRestraunt] = useState([])


  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // corsproxy.io: https://corsproxy.io/?
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9905542&lng=77.7580827&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    // console.log(json)

    // Optional Chaining
    setListOfRestruant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // Conditional Rendering
  // if(listOfRestruant.length === 0) {
  //   // Shimmer UI
  //   return <Shimmer />;
  // }

  // Conditional rendering
  return listOfRestruant.length === 0 ? (<Shimmer />): (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }}/>
          <button onClick={() => {
            // filter the restaurant cards and update the UI
            const filteredRestaurant1 = listOfRestruant.filter((res) => {
              return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase());
            })
            setFilteredRestraunt(filteredRestaurant1)

          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = listOfRestruant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestruant(filteredList);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restraunt) => (
          <RestuarantCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
