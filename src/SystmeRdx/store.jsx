import { configureStore } from "@reduxjs/toolkit";
import { movies } from "./Slices/moviesSlices/homeMoviesSlice";
import { series } from "./Slices/seriesSlices/homeSeriesSlice";
import { myMovies } from "./Slices/moviesSlices/moviesSlice";
import { AllcastAndCrew } from "./Slices/moviesSlices/castAndCrew";
import { myMediaMovie } from "./Slices/moviesSlices/mediaSlice";
import { aboutSearchMovie } from "./Slices/moviesSlices/searchMovies";
import { episodesAndCastCrew } from "./Slices/seriesSlices/aboutSeasonsAndEpisodesSlice";

const store = configureStore({
  reducer: {
    movies,
    series,
    myMovies,
    AllcastAndCrew,
    myMediaMovie,
    aboutSearchMovie,
    episodesAndCastCrew,
  },
});

export default store;
