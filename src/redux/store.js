import { configureStore } from '@reduxjs/toolkit';
import userReducer from './authClice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    }
})