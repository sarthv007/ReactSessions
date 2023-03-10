import React from "react";
import { connect } from "react-redux";
import { DECREMENT, INCREMENT, RESET } from "../constant";

function ReduxCounter(props) {
  return (
    <div>
      <h2>Counter: {props.counter}</h2>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("inside mapStateToProps", state);
  return {
    counter: state.counterReducer.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
    reset: () => dispatch({ type: RESET }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);
