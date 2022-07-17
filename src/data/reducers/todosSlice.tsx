import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    todos: []
}

export const todosSlice: any = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodo: (state, action) => {
            state.todos.unshift(action.payload,)
        }
    }
})

export const {setTodo} :any = todosSlice.actions
export default todosSlice.reducer