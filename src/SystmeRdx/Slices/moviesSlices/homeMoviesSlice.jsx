import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  moviesHome: [],
  moviesHomeLoading: false,
  moviesHomeError: null,
  topMovies: [],
  movieDet: {},
};

export const getMovies = createAsyncThunk(
  "getMovies",
  async (id, asyncThunk) => {
    const { rejectWithValue } = asyncThunk;

    try {
      const allMovies = await axios({
        method: "get",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return allMovies.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const homeMoviesSlice = createSlice({
  name: "homeMoviesSLice",
  initialState: data,
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state, action) => {
      state.moviesHomeLoading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.moviesHome = action.payload.results;
      state.topMovies = action.payload.results.filter((movie) => {
        return movie.vote_average > 7;
      });
      state.moviesHomeLoading = false;
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      state.moviesHomeLoading = false;
      state.moviesHomeError = action.payload.message;
    });
  },
});

export const movies = homeMoviesSlice.reducer;
