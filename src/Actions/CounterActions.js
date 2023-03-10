import { DECREMENT, INCREMENT, RESET } from "../constant";

export const inrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const derementCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const resetCounter = () => {
  return {
    type: RESET,
  };
};
