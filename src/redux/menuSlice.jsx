import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BaseURL = "http://localhost:8081/";
export const fetchMenus = createAsyncThunk("menu/fetchMenus", async () => {
  const response = await axios.get(`${BaseURL}api/menu`);
  return response.data;
});
const initialState = {
  menu: [],
  loading: false,
  error: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenus.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload;
      })
      .addCase(fetchMenus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    })
  },
});

export const {  } = menuSlice.actions;
export default menuSlice.reducer;