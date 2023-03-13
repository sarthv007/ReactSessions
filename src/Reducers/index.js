import { combineReducers } from "redux";
import cakeReducer from "./CakeReducer";
import CounterReducer from "./CounterReducer";
import { UsersReducer } from "./UsersReducer";

const rootReducer = combineReducers({
  cakeReducer: cakeReducer,
  counterReducer: CounterReducer,
  usersReducer: UsersReducer,
});

export default rootReducer;
