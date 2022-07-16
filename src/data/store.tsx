import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./reducers/todosSlice";

const store:any = configureStore({
    reducer:{
        todos: todosSlice,
    }
})

export default store