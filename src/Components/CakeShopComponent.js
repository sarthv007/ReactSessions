import React, { Component } from "react";
import { connect } from "react-redux";

class CakeShopComponent extends Component {
  render() {
    console.log("Component props", this.props);
    return (
      <div>
        <h2>Number of Cake : {this.props.numOfCake} </h2>
        <button onClick={this.props.buyCakeFn}>Buy Cake</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numOfCake: state.cakeReducer.numberOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakeFn: () => dispatch({ type: "BUY_CAKE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeShopComponent);
