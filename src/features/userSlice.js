import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  user: null,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    
    logOut: (state, action) => {
      state.user += null;
    },
  },

});

export const { login, logOut } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;