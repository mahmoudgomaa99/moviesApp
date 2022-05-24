import { EntitySelectors } from "@reduxjs/toolkit";
import adapter from "./adapter";
import { TMovie } from "./model";

const adapterSelectors: EntitySelectors<TMovie, any> = adapter.getSelectors(
  (state: any) => state.movies
);

const movies = (state: any) => adapterSelectors.selectAll(state);

const selectors = {
  movies,
};

export default selectors;
