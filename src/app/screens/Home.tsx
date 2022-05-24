import { SafeAreaView } from "react-native";
import React, { useMemo, useState } from "react";
import { useEffect } from "react";
import Movie from "../../redux/movies";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux";
import List from "../components/organism/List";
import { useLoadingSelector } from "../../redux/selectors";
import Initialloader from "../components/atoms/InitialLoader";

const Home = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const movies = useSelector(Movie.selectors.movies);
  const loading = useLoadingSelector(Movie.thunks.doGetMovies);

  useEffect(() => {
    dispatch(Movie.thunks.doGetMovies(page));
  }, [page]);
  const renderList = useMemo(
    () =>
      loading && movies.length === 0 ? (
        <Initialloader />
      ) : (
        <List data={movies} setPage={setPage} />
      ),
    [movies, page, loading]
  );
  return <SafeAreaView>{renderList}</SafeAreaView>;
};

export default Home;
