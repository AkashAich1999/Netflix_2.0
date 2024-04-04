import React, { useState } from "react";
import axios from "axios";
import { SEARCH_MOVIE_URL, options } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedMovieDetails } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const {movieName, searchedMovie} = useSelector((store) => store.searchMovie);

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      console.log(res.data.results);
      const movies = res?.data?.results;
      dispatch(setSearchedMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };

  console.log(searchMovie);
  return (
    <>
      <div className="flex justify-center pt-[10%] w-[100%]">
        <form onSubmit={submitHandler} className="w-[50%]">
          <div className="flex justify-between border-2 p-2 border-gray-200 shadow-md w-[100%] rounded-lg">
            <input
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
              className="w-full outline-none rounded-md text-lg"
              type="text"
              placeholder="Search Movies..."
            />
            <button className="bg-red-700 text-white rounded-md py-2 px-4">
              {isLoading ? "Searching....." : "Search"}
            </button>
          </div>
        </form>
      </div>
      <MovieList title={movieName} movies={searchedMovie} />
    </>
  );
}

export default SearchMovie;
