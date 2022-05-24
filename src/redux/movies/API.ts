import Constants from "expo-constants";
import axios from "axios";

const getMovies = (page: any) =>
  axios.get(
    `/3/discover/movie?api_key=${Constants.manifest?.extra?.API_KEY}&page=${page}`
  );

const MoviesApi = {
  getMovies,
};

export default MoviesApi;
