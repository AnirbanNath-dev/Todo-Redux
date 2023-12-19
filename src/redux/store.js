import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/slices";


export const store = configureStore({
    reducer : todoSlice,
    
})

