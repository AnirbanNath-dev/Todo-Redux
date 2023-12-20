import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],

    tab: 'tasks'

}

export const todoSlice = createSlice({

    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            const todo = {
                id: nanoid(),
                todo: actions.payload,
                completed: false
            }

            state.todos.push(todo)

        },
        removeTodo: (state, actions) => {

            state.todos = state.todos.filter(todo => todo.id !== actions.payload)

        },

        updateTodo: (state, actions) => {



        },
        completedTodo: (state, actions) => {

            const { id } = actions.payload;

            
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                if(todo.completed){
                    todo.completed = false
                }else{
                    todo.completed = true
                }
            } 

        },

        tabChange: (state, actions) => {

            state.tab = actions.payload

        }

    }
})

export const { addTodo, removeTodo, updateTodo, tabChange, completedTodo } = todoSlice.actions

export default todoSlice.reducer