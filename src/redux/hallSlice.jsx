import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BaseURL = "http://localhost:8081/api";

// Hàm helper để xử lý trạng thái pending, fulfilled, rejected
const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};
// thunk
export const fetchHalls = createAsyncThunk("hall/fetchHalls", async () => {
  const response = await axios.get(`${BaseURL}/hall`);
  return response.data;
});
// Khởi tạo state ban đầu
const initialState = {
  halls: null,
  loading: false,
  error: null,
};

// Slice
const hallSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchHalls.pending, handlePending)
    .addCase(fetchHalls.fulfilled, (state, action) => {
      state.halls = action.payload;
      state.loading = false;
    })
    .addCase(fetchHalls.rejected, handleRejected);
  },
});

export const { } = hallSlice.actions;
export default hallSlice.reducer;
