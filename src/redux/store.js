import { configureStore } from '@reduxjs/toolkit';
import teacherReducer from './teacherClice';

export const store = configureStore({
    reducer: {
        teachers: teacherReducer,
        // filter: filterReducer,
    }
})