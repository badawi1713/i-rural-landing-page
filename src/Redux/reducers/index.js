import { combineReducers } from "redux";
import registrationReducers from "./registration";

const reducers = combineReducers({
  registration: registrationReducers,
});

export default reducers;
