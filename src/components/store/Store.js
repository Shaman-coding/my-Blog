import {combineReducers, createStore} from "redux";
import MyThinkReduser from "./redusers/myThinkReduser";
import CreateReduser from "./redusers/AboutMeReduser";

let redusers = combineReducers({
    ThinkPage: MyThinkReduser,
    AboutPage: CreateReduser
});

let store = createStore(redusers);


export default store;