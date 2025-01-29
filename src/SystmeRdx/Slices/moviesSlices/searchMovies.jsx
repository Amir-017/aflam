import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const data = {
  // search movie

  moviesSearch: [],
  moviesSearchLoading: false,
  moviesSearchError: null,
  checkSearchMovie: false,
  checkSearchSerie: false,
  searchLength: false,
  // search series
  seriesSearch: [],
  changeOneToAnother: "",
};
//////////////////////// search movie
export const getSearchMovies = createAsyncThunk(
  "getMoviessearch",
  async (nameSearch, asyncThunk) => {
    const { rejectWithValue } = asyncThunk;

    try {
      const allSearch = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          query: `${nameSearch}`,
          include_adult: "false",
          language: "en-US",
          page: "1",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMTU1MTY1Ni45ODk0NzYsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5q364lkG4MvwaH5wsZnJkThC-WljePLynW9cXj7FMiY",
        },
      });
      return allSearch.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
////////////////////////////////////// search series
export const getSearchSeries = createAsyncThunk(
  "getSeriesSearch",
  async (nameSearch, asyncThunk) => {
    const { rejectWithValue } = asyncThunk;

    try {
      const allSearchSeries = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/tv",
        params: {
          query: `${nameSearch}`,
          include_adult: "false",
          language: "en-US",
          page: "1",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMTgxMzIxMS4zNTkzMTgsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2s36yuXvNataghu_cZde0VvN-gEg9TppfMReuhNDpw",
        },
      });
      return allSearchSeries.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
const homeMoviesSearch = createSlice({
  name: "homeMoviesSLiceSearch",
  initialState: data,
  reducers: {
    aboutSearch: (state) => {
      state.checkSearchMovie = !state.checkSearchMovie;
    },
    del: (state) => {
      state.searchLength = true;
    },
    aboutMovie: (state) => {
      state.changeOneToAnother = "movie";
    },
    aboutSeries: (state) => {
      state.changeOneToAnother = "serie";
    },
  },
  extraReducers: (builder) => {
    //////////// search Movie

    builder.addCase(getSearchMovies.pending, (state, action) => {});
    builder.addCase(getSearchMovies.fulfilled, (state, action) => {
      state.searchLength = false;
      state.moviesSearch = action.payload.results;
    });
    builder.addCase(getSearchMovies.rejected, (state, action) => {});
    //////////// search series
    builder.addCase(getSearchSeries.pending, (state, action) => {});
    builder.addCase(getSearchSeries.fulfilled, (state, action) => {
      state.searchLength = false;
      state.seriesSearch = action.payload.results;
    });
    builder.addCase(getSearchSeries.rejected, (state, action) => {});
  },
});

export const aboutSearchMovie = homeMoviesSearch.reducer;
export const { aboutSearch, amer, del, aboutMovie, aboutSeries } =
  homeMoviesSearch.actions;
