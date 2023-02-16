import React, { Component, PureComponent } from "react";
import MemoComponentDemo from "./MemoComponentDemo";
import PureComp from "./PureComp";
import RegularChildComp from "./RegularChildComp";
import RegularComponent from "./RegularComponent";

export default class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sarthak Vaidya",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Sarthak Vaidya",
      });
    }, 2000);
  }

  render() {
    console.log("******************ParentComp rendering**********************");
    return (
      <div>
        {/* <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} /> */}

        <RegularChildComp name={this.state.name} />
        {/* <MemoComponentDemo name={this.state.name} /> */}
      </div>
    );
  }
}
