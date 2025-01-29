import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  // movies
  movies: [],

  moviesLoading: false,
  moviesError: null,
  counter: 1,
  checkCount: false,
  movies2: [],

  checkLoop: false,
  //movie Details
  movieDetailsLoading: false,
  movieDetails: {},
};
////////////////////// movie page
export const getMoviesPage = createAsyncThunk(
  "getMoviesPage",
  async (id = 1, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const allMyMovies = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
        params: {
          language: "en-US",
          page: `${id}`,
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return allMyMovies.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
////////////////////// movie details
export const getMovieDetails = createAsyncThunk(
  "getMoviesDetails",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const allMyMoviesDetails = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return allMyMoviesDetails.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
//////
const MoviesSlice = createSlice({
  name: "MoviesSLice",
  initialState: data,
  reducers: {
    incress: (state) => {
      state.counter += 1;

      state.checkCount = !state.checkCount;
    },
    decress: (state) => {
      state.counter -= 1;
      state.checkMovies = false;
      state.checkCount = !state.checkCount;
    },
  },
  extraReducers: (builder) => {
    // all movies
    builder.addCase(getMoviesPage.pending, (state, action) => {
      state.moviesLoading = true;
    });
    builder.addCase(getMoviesPage.fulfilled, (state, action) => {
      state.movies = action.payload.results;

      state.moviesLoading = false;
    });
    builder.addCase(getMoviesPage.rejected, (state, action) => {
      state.moviesLoading = false;
      state.moviesError = action.payload;
    });
    //end of all movies

    //movie details
    builder.addCase(getMovieDetails.pending, (state, action) => {
      state.movieDetailsLoading = true;
    });
    builder.addCase(getMovieDetails.fulfilled, (state, action) => {
      state.movieDetails = action.payload;
      state.movieDetailsLoading = false;
    });
    builder.addCase(getMovieDetails.rejected, (state, action) => {
      console.log("error");
    });
    //end of movie details
  },
});

export const myMovies = MoviesSlice.reducer;
export const { incress, decress, amer } = MoviesSlice.actions;
