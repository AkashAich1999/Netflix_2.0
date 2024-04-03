export const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTQxYTRmNjAwYjQxZGE4OWRhNjBkYTk5OGRiYzU3YiIsInN1YiI6IjY1Zjk0ODI4MjRiMzMzMDBjYzc5NmViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.09RdFKZy1eAWNrCi0mAiPJFfnbRXWPD7kR7MDfNAHD4'
    }
  };

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movie = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming";