import { createAsyncThunk } from "@reduxjs/toolkit";
import MoviesApi from "./API";

export const doGetMovies = createAsyncThunk<any, any, any>(
  "movies/fetch",
  async (page: any, thunkAPI) => {
    try {
      const response = await MoviesApi.getMovies(page);
      return {
        data: response.data,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const thunks = {
  doGetMovies,
};

export default thunks;
