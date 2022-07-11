import { combineReducers, configureStore } from "@reduxjs/toolkit";
import React from "react";
import reducer from "./reducers/reducer";

const rootReducer = combineReducers({
    toolkit: reducer
})
const store = configureStore({
    reducer: rootReducer,
})
export default store