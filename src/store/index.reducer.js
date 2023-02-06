import { combineReducers } from "redux";
// Reducers
import users from "./Users/users.reducers";

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
