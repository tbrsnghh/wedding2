import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BaseURL = "http://localhost:8081/";
export const fetchDishes = createAsyncThunk("dish/fetchDishes", async () => {
  const response = await axios.get(`${BaseURL}api/dishes`);
  return response.data;
});
const initialState = {
  dish: [],
  loading: false,
  error: null,
};

const dishSlice = createSlice({
  name: "dish",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.loading = false;
        state.dish = action.payload.dishes;
      })
      .addCase(fetchDishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {  } = dishSlice.actions;
export default dishSlice.reducer;