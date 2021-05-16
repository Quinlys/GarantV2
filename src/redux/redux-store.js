import {combineReducers, createStore} from "redux";
import {adminReducer} from "./admin-reducer";
import {userReducer} from "./user-reducer";

let reducers = combineReducers({
    adminReducer: adminReducer,
    userReducer: userReducer
});

let store = createStore(reducers);

export default store;