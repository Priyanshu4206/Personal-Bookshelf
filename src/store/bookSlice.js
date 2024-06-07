import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBooks = createAsyncThunk(
  "data/fetchBooks",
  async (query = "") => {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
    );
    const data = await response.json();
    return data;
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
