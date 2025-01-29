import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  // cast crew
  castAndCrew: [],
  castAndCrewLoading: false,
  castShown: [],
  //reviews
  reviews: [],
  reviewsLoading: false,
  // about actor
  infoActor: {},
  actorsWork: [],
  infoActorLoading: false,
};
///////////// cast & crew movie
export const getCastCrew = createAsyncThunk(
  "getCastCrew",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllCastCrew = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/credits`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return getAllCastCrew.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
///////////// review movie
export const getReviewMovie = createAsyncThunk(
  "getAllReviews",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllReviews = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B2gaJass2LZ7YG8RB9u2PxXFNBHimDIBXxwQAVSeJDE",
        },
      });
      return getAllReviews.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
/////////////about actor movie
export const getInfoActor = createAsyncThunk(
  "about actor",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllInfo = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${id}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMDg2NDU1NC4wOTk2NDksInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gj89ws--ZVgtOUD7Pm2BmAE7-KL3AVrUbhNS2oKkZv4",
        },
      });
      return getAllInfo.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
///////////// work actor
export const getWorkActor = createAsyncThunk(
  " actor work",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllWorkes = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${id}/combined_credits`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMDg2NDU1NC4wOTk2NDksInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gj89ws--ZVgtOUD7Pm2BmAE7-KL3AVrUbhNS2oKkZv4",
        },
      });
      return getAllWorkes.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
const castAndCrew = createSlice({
  name: "crew and cast",
  initialState: data,
  extraReducers: (builder) => {
    // all cast and crew
    builder.addCase(getCastCrew.pending, (state, action) => {
      state.castAndCrewLoading = true;
    });
    builder.addCase(getCastCrew.fulfilled, (state, action) => {
      state.castAndCrew = action.payload;
      state.castAndCrewLoading = false;

      state.castShown = action.payload.cast.filter((actor, i) => {
        return i < 15;
      });
    });
    builder.addCase(getCastCrew.rejected, (state, action) => {
      console.log("error");
    });

    // all reviews
    builder.addCase(getReviewMovie.pending, (state, action) => {
      state.reviewsLoading = true;
    });
    builder.addCase(getReviewMovie.fulfilled, (state, action) => {
      state.reviews = action.payload.results;
      state.reviewsLoading = false;
    });
    builder.addCase(getReviewMovie.rejected, (state, action) => {
      console.log("error");
    });
    // about actor
    builder.addCase(getInfoActor.pending, (state, action) => {
      state.infoActorLoading = true;
    });
    builder.addCase(getInfoActor.fulfilled, (state, action) => {
      state.infoActor = action.payload;

      state.infoActorLoading = false;
    });
    builder.addCase(getInfoActor.rejected, (state, action) => {
      console.log("error");
    });
    // actors work
    builder.addCase(getWorkActor.pending, (state, action) => {});
    builder.addCase(getWorkActor.fulfilled, (state, action) => {
      state.actorsWork = action.payload.cast.filter((movie) => {
        return movie.vote_average > 7;
      });
    });
    builder.addCase(getWorkActor.rejected, (state, action) => {
      console.log("error");
    });
  },
});

export const AllcastAndCrew = castAndCrew.reducer;
