import { configureStore } from '@reduxjs/toolkit'
import { todosSlice } from './reducers/todosSlice'


// Reducer
const todosReducer = todosSlice.reducer

// Store
const store = configureStore({
    reducer: {
        todosReducer
    }
})



export default store
