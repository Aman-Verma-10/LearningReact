import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  // We use it for API call when class component mount/loads.
  componentDidMount() {
    console.log("Parent Component did mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is React Router</h2>
        {/* <User name="Aman Verma(function)" location="Bangalore(function)" /> */}

        <UserClass name="First(class)" location="Bangalore(class)" />
        {/* <UserClass name="Second(class)" location="US(class)" /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is React Router</h2>
//       {/* <User name="Aman Verma(function)" location="Bangalore(function)" /> */}

//       <UserClass name="Aman Verma(class)" location="Bangalore(class)" />
//     </div>
//   );
// };

export default About;
