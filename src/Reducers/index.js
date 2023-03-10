import { combineReducers } from "redux";
import cakeReducer from "./CakeReducer";
import CounterReducer from "./CounterReducer";

const rootReducer = combineReducers({
  cakeReducer: cakeReducer,
  counterReducer: CounterReducer,
});

export default rootReducer;
