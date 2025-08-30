import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    //   count: 0,
      //   count2: 2,
      userInfo: {
        name: "Dummy",
        location: "default",
        avatar_url:"#"
      }
    };
    // console.log(this.props.name + "Child Constructor");
  }

  // Called when component mounted
  async componentDidMount() {
    // console.log(this.props.name + "Child Component did mount");

    // API call
    const data = await fetch("https://api.github.com/users/Aman-Verma-10")
    const json = await data.json();

    this.setState({
      userInfo: json,
    })
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update")
  }

  componentWillUnmount() {
    console.log("component is removed from UI");
  }

  // render method return the JSX
  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    // const { count } = this.state;
    // console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1> */}
        {/* <button
          onClick={() => {
            // Never update state variables directly
            this.setState({
              // on every updation of state variable the react is re rendering the component
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        {/* <h1>Count2: {count2}</h1> */}
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @amanverma</h4>
      </div>
    );
  }
}

export default UserClass;


/**
 * 
 * Constructor is called (dummy)
 * Render (dummy)
 * HTML loaded
 * componentDidMount is called
 *    Make API call
 *    setState() called
 * 
 * ---- update
 *    render(API new data)
 *    HTML loaded with updated data(API data)
 * 
 * componentDidUpdate
 * 
 */