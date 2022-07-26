import { combineReducers } from "redux";
import errors from "./errorReducer";
import projects from "./projectReducer";
import backlogReducer from "./backlogReducer";

export default combineReducers ({
    errors,
    projects,
    backlog: backlogReducer,
});