import React from "react";
import ReactDOM from 'react-dom/client';


// React.createElement =>created an react element i.e. Object => When render this element onto the DOM then it becomes an HTML element

// const heading = React.createElement("h1", {id:"heading"}, "Heading React Element 🚀");

//JSX => transpiled to React.createElement(...) => converted to JS|React element => Then render onto the DOM as HTML element

// Babel converting JSX to React.createElement(...)

// JSX
// To give attributes in JSX use camelCase
// To write JSX in multiple lines then wrap it around roung brackets() but not mandatory when writing JSX in single line

// React Element
const jsxHeading = (<h1 id="heading" className="root">
  Heading Using JSX syntax 🚀
  </h1>);

// console.log(jsxHeading)

// React Component
// Class Based Component, Functional Component

// React Functional Component
// Function which is returing some piece of JSX code is called functional component

// Title component is at the end of the day is also nothing but function which you can also call like {Title()} inside JSX
const Title = () => (
  <h1 className="head" tabIndex="5">
    React using JSX 🚀
  </h1>
)

// const Title = function () {
//   return (
//   <h1 className="head" tabIndex="5">
//     React using JSX 🚀
//   </h1>
//   );
// };
// Two ways to use component
// - <Title /> or <Title></Title>

// Component Composition: one component inside component
// const HeadingComponent = () => ( 
//   <div id="container">
//     <Title />
//   <h1 className="heding">React functional component</h1>
//   </div>
// )

// <HeadingComponent> babel understand when see <> that there must be heading component existing 

// We can write any JS expression inside {} in JSX

const title = (
  <h1 className="head" tabIndex="5">
    React using JSX 🚀
  </h1>
  )


const number = 1000;
const HeadingComponent = () => ( 
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    {number}
    {console.log("Aman")}
    {title}
  <h1 className="heding">React functional component</h1>
  </div>
)

// So we can compose any react element inside react element, a component inside a component, a component inside a react element so on...

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<h1 id="heading">Heading Using JSX syntax 🚀</h1>)


root.render(<HeadingComponent />);