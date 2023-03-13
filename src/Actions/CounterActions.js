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

//normal action creator
export const resetCounter = () => {
  return {
    type: RESET,
  };
};
