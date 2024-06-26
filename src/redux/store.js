import { configureStore } from '@reduxjs/toolkit';
import {teacherReducer} from './teacherClice';
// import filterReducer from './filterSlice';

export const store = configureStore({
    reducer: {
        teachers: teacherReducer,
        // filter: filterReducer,
    }
})