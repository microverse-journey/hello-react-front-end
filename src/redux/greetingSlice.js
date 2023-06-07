const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const initialState = {
  greeting: 'Hello',
};

export const getGreetings = createAsyncThunk('getGreetings', async () => {
  const data = await fetch('/api/greetings');
  const res = await data.json();
  return res;
});

const GreetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGreetings.fulfilled, (state, { payload }) => {
        state.greeting = payload.message;
      });
  },
});

export default GreetingSlice.reducer;
