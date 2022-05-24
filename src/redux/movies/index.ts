import { EntityKeys } from "../schema";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import adapter from "./adapter";
import thunks from "./thunks";
import selectors from "./selectors";

const slice = createSlice({
  name: EntityKeys.MOVIES,
  initialState: adapter.getInitialState({}),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(thunks.doGetMovies.fulfilled),
      (state: any, action) => {
        adapter.upsertMany(state, action.payload?.data?.results);
      }
    );
  },
});

const Movie = {
  thunks,
  slice,
  adapter,
  selectors,
};

export default Movie;
