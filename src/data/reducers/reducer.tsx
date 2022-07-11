import { createAction, createReducer } from "@reduxjs/toolkit";


const initialState = {
    todos: [
        {
            title: "Погулять",
            completed: false
        },
        {
            title: "Помыть посуду",
            completed: false
        },
        {
            title: "Послшуать музыку",
            completed: false
        },
        {
            title: "Доделать тудушку",
            completed: false
        },
        {
            title: "Поставить цели на будущее",
            completed: false
        },
    ]
}

export const addTodo: any = createAction('ADDTODO')
export const removeTodo: any = createAction('REMOVETODO')


export default createReducer( initialState, {
    [addTodo]: (state: any) => {
        state.todos = [{
            title: "aga",
            completed: false
        }, ...state.todos]
    },
    [removeTodo]: (state: any) => {
        state.todos = [{
            title: "ne",
            completed: false
        }, ...state.todos]
    },
})