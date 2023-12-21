import { createSlice, nanoid } from "@reduxjs/toolkit";


const todos = JSON.parse(localStorage.getItem('todos'))


const initialState = {
    todos: todos && todos.length > 0 ? todos : [],
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

            const { todo , id} = actions.payload
            const task = state.todos.find(todo => todo.id === id);
            

            task.todo = todo


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