import { combineReducers } from "redux";

import doctorReducer from "./doctorReducer";

const appReducer = combineReducers({
  doctor: doctorReducer
});

export default appReducer;
