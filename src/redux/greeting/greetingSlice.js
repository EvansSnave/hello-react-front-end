import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGreetings = createAsyncThunk('greet/getGreetings',
  async () => {
    const data = await fetch('http://localhost:3000/api/v1/get_greeting');
    const response = await data.json();
    return response;
  });

const initialState = {
  greeting: '',
};

const sliceForGreetings = createSlice({
  name: 'greet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreetings.fulfilled, (state, action) => {
      state.greeting = action.payload.message;
    });
  },
});

export default sliceForGreetings.reducer;
