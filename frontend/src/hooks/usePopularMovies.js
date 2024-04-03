import axios from "axios";
import { useDispatch } from "react-redux";
import { Popular_Movie, options } from "../utils/constant";
import { getPopularMovie } from "../redux/movieSlice";

const usePopularMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Popular_Movie, options);
    //   console.log(res.data.results);
    dispatch(getPopularMovie(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default usePopularMovies;
