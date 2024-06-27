import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: null,
  email: null,
  token: null,
  id: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    setUser(state, {payload})  {
      state.name = payload.name;
      state.email = payload.email;
      state.token = payload.token;
      state.id = payload.id;
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
      state.token = null;
      state.id = null;
    }
  }
})

export const{setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;