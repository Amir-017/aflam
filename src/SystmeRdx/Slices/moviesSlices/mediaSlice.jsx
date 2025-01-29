import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const data = {
  // video movie
  videoMovie: [],
  videoLoading: false,
  // backdrop & posters movie
  backDrops: [],
  backDropsLoading: false,
  //recommendation movie
  recommendationMovie: [],
  recommendationLoading: false,
  checkRecommend: false,
};

/////////////////// video Movie
export const getVideoMovie = createAsyncThunk(
  "getAllVideo",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllVideos = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/videos`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return getAllVideos.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
/////////////////// backdrop and posters Movie

export const getBackDrops = createAsyncThunk(
  "getBackdrops",
  async (id, asyncThunk) => {
    const { rejectWithValue } = asyncThunk;

    try {
      const getAllBackDrops = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/images`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return getAllBackDrops.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
/////////////////// recommendation Movie

export const getRecommendMovie = createAsyncThunk(
  "getAllRecommend",
  async (i, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllRecommend = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${i}/recommendations`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMDQyNzI5NC42NTE4MjksInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3zK9h5n0ErOfk4WbreDttY5YfrnzDCtILUBiBYA0pZA",
        },
      });
      return getAllRecommend.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
// e__ recommendation movie
const mediaSlice = createSlice({
  name: "mediaSlice",
  initialState: data,
  reducers: {
    aboutRecommend: (state) => {
      state.checkRecommend = !state.checkRecommend;
    },
  },
  extraReducers: (builder) => {
    // videos
    builder.addCase(getVideoMovie.pending, (state, action) => {
      state.videoLoading = true;
    });
    builder.addCase(getVideoMovie.fulfilled, (state, action) => {
      state.videoMovie = action.payload.results;
      state.videoLoading = false;
    });
    builder.addCase(getVideoMovie.rejected, (state, action) => {
      console.log("error");
    });

    //backdrops
    builder.addCase(getBackDrops.pending, (state, action) => {
      state.backDropsLoading = true;
    });
    builder.addCase(getBackDrops.fulfilled, (state, action) => {
      state.backDrops = action.payload;
      state.backDropsLoading = false;
    });
    builder.addCase(getBackDrops.rejected, (state, action) => {
      console.log("error");
    });

    // recommendation movie
    builder.addCase(getRecommendMovie.pending, (state, action) => {
      state.recommendationLoading = true;
    });
    builder.addCase(getRecommendMovie.fulfilled, (state, action) => {
      state.recommendationMovie = action.payload.results;
      state.recommendationLoading = false;
    });
    builder.addCase(getRecommendMovie.rejected, (state, action) => {
      console.log("error");
    });
  },
});

export const myMediaMovie = mediaSlice.reducer;
export const { aboutRecommend } = mediaSlice.actions;
