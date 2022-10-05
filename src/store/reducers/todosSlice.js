import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from 'axios'

export const getTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=6')
    return response.data
})

export const addTodos = createAsyncThunk('todos/addTodo', async title => {
    const newTodos = {
        id: nanoid(),
        title,
        completed: false,
    }
    await axios.post('https://jsonplaceholder.typicode.com/todos', newTodos)

    return newTodos
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async todoId => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    return todoId
})

export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        allTodo: [],
    },
    reducers: {
        // addTodo: {
        //     reducer: (state, action) => {
        //         state.allTodo.unshift(action.payload)
        //     },
        //     prepare: (title) => {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 title,
        //                 completed: false,
        //             }
        //         }
        //     }
        // },
        markComplete: {
            reducer: (state, action) => {
                const todoId = action.payload

                state.allTodo.map(todo => {
                    if (todo.id === todoId) todo.completed = !todo.completed
                    return todo
                })
            }
        },
        // deleteTodo: {
        //     reducer: (state, action) => {
        //         const todoId = action.payload

        //         state.allTodo = state.allTodo.filter(todo => todo.id !== todoId)
        //     }
        // },
    },
    extraReducers: {
        // Get todos
        [getTodos.pending]: (state, action) => {
            console.log("Fetching data from backend ...")
        },
        [getTodos.fulfilled]: (state, action) => {
            console.log("Done!")
            state.allTodo = action.payload
        },
        [getTodos.rejected]: (state, action) => {
            console.log("Fail to fetching !!!")
        },
        // Add todo
        [addTodos.fulfilled]: (state, action) => {
            console.log("Done!")
            state.allTodo.unshift(action.payload)
        },
        // Delete Todo
        [deleteTodo.fulfilled]: (state, action) => {
            console.log("Done!")
            state.allTodo = state.allTodo.filter(todo => todo.id !== action.payload)
        }
    }
})

// Selector
export const todoSelector = state => state.todosReducer.allTodo

export const { markComplete } = todosSlice.actions
