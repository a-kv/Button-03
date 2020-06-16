import {combineReducers, createStore} from "redux";
import {mondayReducer} from "./redux/mondayReducer";
import {tuesdayReducer} from "./redux/tuesdayReducer";
import {wednesdayReducer} from "./redux/wednesdayReducer";

let reducers = combineReducers({
    mondayPage: mondayReducer,
    tuesdayPage: tuesdayReducer,
    wednesdayPage: wednesdayReducer,


})
let store = createStore(reducers)
export default store;