import {composeWithDevTools} from "redux-devtools-extension";
import {combineReducers, createStore, applyMiddleware} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReducer = combineReducers({

})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export  default store;

