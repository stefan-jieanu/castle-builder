import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isError: false, 
  isSuccess: false,
  isLoading: false,
  message: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      let newState = {...state};
      newState.isError = false; 
      newState.isSuccess = false;
      newState.isLoading = false;
      newState.message = '';
      
      return {...state};
    },
  },
  extraReducers: () => {}
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;