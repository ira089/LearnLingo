import { createAsyncThunk } from '@reduxjs/toolkit';
import * as teachersApi from '../api/teachersApi';

export const getTeachersThunk = createAsyncThunk(
    'teachers/get',
    async (_, thunkAPI) => {
      try {
        const contacts = teachersApi.fetchTeacherAll();
        return contacts;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );