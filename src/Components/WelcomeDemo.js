import React, { Component } from "react";

export class WelcomeDemo extends Component {
  handleClick = (name) => {
    alert(name);
  };
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick("sarthak")}>Click Me</button>
      </div>
    );
  }
}

export default WelcomeDemo;

// // onclick
// // onClick

//import React from "react";

// function WelcomeDemo() {
//   const handleClick = () => {
//     alert("Button clicked");
//   };

//   function handleChange() {
//     alert("handle change event handler");
//   }

//   return (
//     <div>
//       <input type="text" name="inputbox" onKeyUp={handleChange} />
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default WelcomeDemo;
