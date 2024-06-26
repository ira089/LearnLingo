import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as teachersApi from '../api/teachersApi';
import {fireTeacherAll} from '../../src/firebase'



export const getTeachersThunk = createAsyncThunk(
    'teachers/get',
    async (_, thunkAPI) => {
      try {
        const teachers = fireTeacherAll();
        console.log(teachers)
        return teachers;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );