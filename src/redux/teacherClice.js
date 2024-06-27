import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
       isLoading: false,
      error: null,
}

const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers:{
    getTeacher(state, {payload})  {
      console.log(payload)
     
      state.items = payload;
      
    }
  }
})

export const {getTeacher} = teacherSlice.actions;
export default teacherSlice.reducer;
// import * as teacherOperations from './teacherOperations'
// import {
//     handleFulfilled,
//     handlePending,
//     handleRejected,
//   } from '../functions/functions';

//   const handleFulfilledGet = (state, { payload }) => {
//     console.log(payload)
//     handleFulfilled(state);
//     state.items = payload;
//   };



//   export const teacherSlice = createSlice({
//     name: 'teachers',
//     initialState: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
  
//     extraReducers: builder => {
//       builder
//         .addCase(teacherOperations.getTeachersThunk.pending, handlePending)
//         .addCase(teacherOperations.getTeachersThunk.fulfilled, handleFulfilledGet)
//         .addCase(teacherOperations.getTeachersThunk.rejected, handleRejected)
        // .addCase(camperOperations.toggleFavoritesThunk.pending, handlePending)
        // .addCase(camperOperations.toggleFavoritesThunk.fulfilled, handleFulfilledToggle)
        // .addCase(camperOperations.toggleFavoritesThunk.rejected, handleRejected);
  //   },
  // });
  
  // export const teacherReducer = teacherSlice.reducer; 