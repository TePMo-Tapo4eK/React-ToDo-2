import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    todos: [],
    completedTodos: []
}

export const todosSlice: any = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodo: (state, action) => {
            state.todos.unshift(action.payload)
        },
        removeTodo: (state, action) => {
            console.log(action.payload)
            state.todos =  state.todos.filter((todo:any) => todo.id !== action.payload)
            state.completedTodos =  state.completedTodos.filter((todo:any) => todo.id !== action.payload)
        },
        completeTodo: (state, action) => {
            state.completedTodos.unshift(action.payload)
            state.todos =  state.todos.filter((todo:any) => todo.id !== action.payload.id)
        }
    }
})

export const {setTodo, removeTodo, completeTodo} :any = todosSlice.actions
export default todosSlice.reducer