import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // If no dependency array --> useEffect is called on every render
  // If dependency array is empty --> useEffect is called on initial render(just once)
  // If dependency array is [btnName] then useEffect is called every time when btnName is updated
  // useEffect(() => {
  //   console.log("useEffect called")
  // }, [btnName]);

  // let btnName = "Login";

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              // if(btnName === 'Login') {
              //   setBtnName("Logout");
              // } else {
              //   setBtnName("Login");
              // }

              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
