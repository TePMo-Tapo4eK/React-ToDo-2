import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    todos: [
        {
            title: "title",
            completed: false
        },
    ]
}

export const todosSlice: any = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodo: (state, action) => {
            state.todos = [{title: action.payload, completed: false}, ...state.todos]
        }
    }
})

export const {setTodo} :any = todosSlice.actions
export default todosSlice.reducer