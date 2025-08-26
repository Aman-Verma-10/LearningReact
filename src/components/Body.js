import RestuarantCard from "./RestuarantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // State Variable - Super powerfull variable
  const [listOfRestruant, setListOfRestruant] = useState(resList);

  // let listOfRestruantJS = [
  //   {
  //     data: {
  //       id: "407808",
  //       name: "Pizza Hut",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a969dbcd-5e5e-4fd3-a539-5ff455fcd109_407808.JPG",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 3.8,
  //       deliveryTime: 30,
  //     },
  //   },
  //   {
  //     data: {
  //       id: "407807",
  //       name: "Dominos",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a969dbcd-5e5e-4fd3-a539-5ff455fcd109_407808.JPG",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.5,
  //       deliveryTime: 30,
  //     },
  //   },
  //   {
  //     data: {
  //       id: "407809",
  //       name: "KFC",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a969dbcd-5e5e-4fd3-a539-5ff455fcd109_407808.JPG",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.1,
  //       deliveryTime: 30,
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestruant.map((restraunt) => (
          <RestuarantCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
