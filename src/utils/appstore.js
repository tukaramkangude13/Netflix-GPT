import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../utils/movieslice";
import movieReducer from "../utils/toprated"
import userReducer from "./userSlice";  // Corrected the import path (./userSlice)
const appsstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    movie: movieReducer,

  },
});

export default appsstore;
