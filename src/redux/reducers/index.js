import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

const reducers = combineReducers({
  allTasks: todoReducer
});
