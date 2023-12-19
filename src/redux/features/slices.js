import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos : [],

    tab : 'tasks'

}

export const todoSlice = createSlice({

    name: 'todo',
    initialState,
    reducers: {
        addTodo : (state , actions) => {
            const todo = {
                id : nanoid(),
                todo: actions.payload,
                completed : false
            }

            state.todos.push(todo)
            
        },
        removeTodo : (state , actions) => {

            state.todos = state.todos.filter(todo => todo.id !== actions.payload)

        },

        updateTodo : (state , actions) => {
            
            

        },
        completedTodo : (state , actions) => {

            state.todos = state.todos.map(todo => {

                if(todo.id == actions.payload.id){

                    return {
                        id : todo.id,
                        todo : todo.todo,
                        completed : actions.payload.completed
                    }

                }
            
            })
             
        },

        tabChange : (state , actions) => {

            state.tab = actions.payload

        }

    }
})

export const {addTodo , removeTodo , updateTodo , tabChange , completedTodo} = todoSlice.actions

export default todoSlice.reducer