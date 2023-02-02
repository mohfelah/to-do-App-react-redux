import { combineReducers } from "redux";
import tasksReducers from "./tasksReducers";


const rootReducer = combineReducers({tasksReducers})
export default rootReducer;