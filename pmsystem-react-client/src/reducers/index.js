import { combineReducers } from "redux";
import errors from "./errorReducer"
import projects from "./projectReducer"

export default combineReducers ({
    errors,
    projects
});