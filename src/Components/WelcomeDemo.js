// import React, { Component } from "react";

// export class WelcomeDemo extends Component {
//   handleClick = (name) => {
//     alert(name);
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={() => this.handleClick("sarthak")}>Click Me</button>
//       </div>
//     );
//   }
// }

// export default WelcomeDemo;

// // // onclick
// // // onClick

// //import React from "react";

// // function WelcomeDemo() {
// //   const handleClick = () => {
// //     alert("Button clicked");
// //   };

// //   function handleChange() {
// //     alert("handle change event handler");
// //   }

// //   return (
// //     <div>
// //       <input type="text" name="inputbox" onKeyUp={handleChange} />
// //       <button onClick={handleClick}>Click Me</button>
// //     </div>
// //   );
// // }

// // export default WelcomeDemo;

import React, { Component } from "react";

export default class WelcomeDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "sarthak",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("from getDerivedStateFromProps");
    return {
      name: "",
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("from shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("from getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("from componentDidUpdate", prevState);
    if (this.state.count < 3) {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }

  render() {
    console.log("from render", this.state);
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
