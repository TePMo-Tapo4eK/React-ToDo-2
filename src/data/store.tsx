import { combineReducers, configureStore } from "@reduxjs/toolkit";
import React from "react";

const rootReducer = combineReducers({})

export const Counter = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>