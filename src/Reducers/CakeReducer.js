const initialState = {
  numberOfCake: 100,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numberOfCake: state.numberOfCake - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
