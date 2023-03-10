import { DECREMENT, INCREMENT, RESET } from "../constant";

const initialState = {
  counter: 0,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };

    case DECREMENT:
      return {
        counter: state.counter - 1,
      };

    case RESET:
      return initialState;

    default:
      return state;
  }
};

export default CounterReducer;
