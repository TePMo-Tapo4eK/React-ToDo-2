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
        },
        removeTodo: (state, action) => {
            state.todos =  state.todos.filter((todo:any) => todo.title !== action.payload)
        }
    }
})

export const {setTodo, removeTodo} :any = todosSlice.actions
export default todosSlice.reducer