import React, { useEffect, useReducer } from "react";
import axios from "axios";

const intitalState = {
  loading: true,
  user: {},
  error: "",
};

const ReducerFunction = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        user: action.payload,
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went wrong",
        user: {},
      };

    default:
      return intitalState;
  }
};

function FetchDataUsingReducerHook() {
  const [state, dispatch] = useReducer(ReducerFunction, intitalState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicod.com/users/1")
      .then((res) => {
        console.log(res.data);
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <>
      <h2>Welcome to React useEffect</h2>
      <div>
        {state.loading ? <div>Loading...</div> : state.user.name}
        {state.error ? state.error : null}
      </div>
    </>
  );
}

export default FetchDataUsingReducerHook;
