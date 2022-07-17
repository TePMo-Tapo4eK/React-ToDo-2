import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./reducers/todosSlice";

const store:any = configureStore({
    reducer:{
        todo: todosSlice,
    }
})

export default store