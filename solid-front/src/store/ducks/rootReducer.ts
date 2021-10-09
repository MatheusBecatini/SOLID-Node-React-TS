import { combineReducers } from "redux";
import reducer from "./repositories/reducer";

export default combineReducers({ userRepositories: reducer });
