import React from "react";

function HOC(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        counter: 0,
      };
    }

    increment = () => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    };

    decrement = () => {
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    };

    render() {
      console.log("FRom HOC", this.props);

      return (
        <WrappedComponent
          {...this.props}
          counter={this.state.counter}
          decrement={this.decrement}
          increment={this.increment}
        />
      );
    }
  };
}

export default HOC;
