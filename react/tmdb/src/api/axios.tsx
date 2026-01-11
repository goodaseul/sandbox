import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTdlZmZjYmI0NjAwNDZlMjRlODdiMGEwNGY5M2YyNCIsIm5iZiI6MTc0MDc4ODg2Ni4xODcsInN1YiI6IjY3YzI1NDgyODY3NDk1M2I3ZGRiZTA3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TLG-c2a3WzK8mCNyNeIMXRiQxBYRkzWsM5q2rmZHp6Q",
  },
});
