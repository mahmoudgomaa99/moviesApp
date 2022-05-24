import { combineReducers } from "@reduxjs/toolkit";
import Movie from "./movies";
import loadingSlice from "./_loading";

const combinedReducer = combineReducers({
  _loading: loadingSlice.reducer,

  [Movie.slice.name]: Movie.slice.reducer,
});

export default combinedReducer;
