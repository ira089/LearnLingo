import { createSlice } from '@reduxjs/toolkit';
import * as teacherOperations from './teacherOperations'
import {
    handleFulfilled,
    handlePending,
    handleRejected,
  } from '../functions/functions';

  const handleFulfilledGet = (state, { payload }) => {
    handleFulfilled(state);
    state.items = payload;
  };

//   const handleFulfilledToggle = (state, {payload}) => {
//     handleFulfilled(state);
//     const index = state.items.findIndex(
//       item => item.id === payload.id
//     );
//     state.items.splice(index, 1, payload);
//   }

  export const teacherSlice = createSlice({
    name: 'teachers',
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
  
    extraReducers: builder => {
      builder
        .addCase(teacherOperations.getTeachersThunk.pending, handlePending)
        .addCase(teacherOperations.getTeachersThunk.fulfilled, handleFulfilledGet)
        .addCase(teacherOperations.getTeachersThunk.rejected, handleRejected)
        // .addCase(camperOperations.toggleFavoritesThunk.pending, handlePending)
        // .addCase(camperOperations.toggleFavoritesThunk.fulfilled, handleFulfilledToggle)
        // .addCase(camperOperations.toggleFavoritesThunk.rejected, handleRejected);
    },
  });
  
  export const teacherReducer = teacherSlice.reducer; 