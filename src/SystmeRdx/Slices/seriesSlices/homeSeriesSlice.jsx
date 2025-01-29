import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  series: [],
  seriesHomeLoading: false,
  seriesHomeError: null,
  counter: 1,
  checkCountSeries: false,
  topSeries: [],
  // series details
  seriesDetails: {},
  seriesDetailsLoading: false,
  seriesDetailsError: null,
  // cast and crew
  castAndCrewSeries: [],
  castAndCrewSeriesLoading: false,
  castAndCrewSeriesError: null,
  castShownSeries: [],
  // review series
  reviewsSeries: [],
  reviewsSeriesLoading: false,
  seriesReviewError: null,
  // video series
  videoSeries: [],
  videoSeriesLoading: false,
  // back drops and posters
  backDropsSeries: {},
  backDropsSeriesLoading: false,
  // recommendation series
  recommendationSeries: [],
  recommendationLoadingSeries: false,
  checkRecommendSeries: false,
};

export const getSeries = createAsyncThunk(
  "getSeries",
  async (i = 1, asyncThunk) => {
    const { rejectWithValue } = asyncThunk;

    try {
      const allSeries = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/tv/popular",
        params: { language: "en-US", page: `${i}` },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMTgxMzIxMS4zNTkzMTgsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2s36yuXvNataghu_cZde0VvN-gEg9TppfMReuhNDpw",
        },
      });
      return allSeries.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

//////////////// Series Details
export const getSeriesDetails = createAsyncThunk(
  "getSeriesDetails",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const allMySeriesDetails = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMTgxMzIxMS4zNTkzMTgsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2s36yuXvNataghu_cZde0VvN-gEg9TppfMReuhNDpw",
        },
      });
      return allMySeriesDetails.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
////////////////////////////// cast and crew series
export const getCastCrewSeries = createAsyncThunk(
  "getCastCrewSeries",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllCastCrewSeries = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/credits`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMTgxMzIxMS4zNTkzMTgsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2s36yuXvNataghu_cZde0VvN-gEg9TppfMReuhNDpw",
        },
      });
      return getAllCastCrewSeries.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
/////////////////////////////////////////// reviews Series
export const getReviewSeries = createAsyncThunk(
  "getAllReviewsSeries",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllReviewsSeries = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/reviews`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMTgxMzIxMS4zNTkzMTgsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2s36yuXvNataghu_cZde0VvN-gEg9TppfMReuhNDpw",
        },
      });
      return getAllReviewsSeries.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

//////////////////////////////////////// video Series
export const getVideoSeries = createAsyncThunk(
  "getAllVideoSeries",
  async (id, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllVideosSeries = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/videos`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMTgxMzIxMS4zNTkzMTgsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2s36yuXvNataghu_cZde0VvN-gEg9TppfMReuhNDpw",
        },
      });
      return getAllVideosSeries.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
///////////////////////////////////// back drops and posters
export const getBackDropsSeries = createAsyncThunk(
  "getBackdropsSeries",
  async (id, asyncThunk) => {
    const { rejectWithValue } = asyncThunk;

    try {
      const getAllBackDropsSeries = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/images`,
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMTgxMzIxMS4zNTkzMTgsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2s36yuXvNataghu_cZde0VvN-gEg9TppfMReuhNDpw",
        },
      });
      return getAllBackDropsSeries.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
///////////////////////////////////////// recommendation Seris
export const getRecommendSeris = createAsyncThunk(
  "getAllRecommendSeris",
  async (i, asyncThunkk) => {
    const { rejectWithValue } = asyncThunkk;

    try {
      const getAllRecommendSeris = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${i}/recommendations`,
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMTgxMzIxMS4zNTkzMTgsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._2s36yuXvNataghu_cZde0VvN-gEg9TppfMReuhNDpw",
        },
      });
      return getAllRecommendSeris.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
const homeSeriesSlice = createSlice({
  name: "homeSeriesSLice",
  initialState: data,
  reducers: {
    increment: (state) => {
      state.counter += 1;

      state.checkCountSeries = !state.checkCountSeries;
    },
    decrement: (state) => {
      state.counter -= 1;
      state.checkMovies = false;
      state.checkCountSeries = !state.checkCountSeries;
    },
    aboutRecommend: (state) => {
      state.checkRecommendSeries = !state.checkRecommendSeries;
    },
  },
  extraReducers: (builder) => {
    ////////////////////////////// series
    builder.addCase(getSeries.pending, (state, action) => {
      state.seriesHomeLoading = true;
    });
    builder.addCase(getSeries.fulfilled, (state, action) => {
      state.series = action.payload.results;
      state.topSeries = action.payload.results.filter((seir) => {
        return seir.vote_average > 7;
      });
      state.seriesHomeLoading = false;
    });
    builder.addCase(getSeries.rejected, (state, action) => {
      state.seriesHomeLoading = false;
      state.seriesHomeError = action.payload.message;
    });
    ///////////////////////////////// series details :-
    builder.addCase(getSeriesDetails.pending, (state, action) => {
      state.seriesDetailsLoading = true;
    });
    builder.addCase(getSeriesDetails.fulfilled, (state, action) => {
      state.seriesDetails = action.payload;
      state.seriesDetailsLoading = false;
    });
    builder.addCase(getSeriesDetails.rejected, (state, action) => {
      console.log("error");
    });
    /////////////////////////////////// cast and crew Series
    builder.addCase(getCastCrewSeries.pending, (state, action) => {
      state.castAndCrewSeriesLoading = true;
    });
    builder.addCase(getCastCrewSeries.fulfilled, (state, action) => {
      state.castAndCrewSeries = action.payload;
      state.castShownSeries = action.payload.cast.filter((actor, i) => {
        return i < 15;
      });
      state.castAndCrewSeriesLoading = false;
    });
    builder.addCase(getCastCrewSeries.rejected, (state, action) => {
      console.log("error");
    });
    ////////////////////////////////////// all review series
    builder.addCase(getReviewSeries.pending, (state, action) => {
      state.reviewsSeriesLoading = true;
    });
    builder.addCase(getReviewSeries.fulfilled, (state, action) => {
      state.reviewsSeries = action.payload;

      state.reviewsSeriesLoading = false;
    });
    builder.addCase(getReviewSeries.rejected, (state, action) => {
      state.seriesReviewError = action.payload.results;
      console.log("error");
    });
    ///////////////////////////////// video series
    builder.addCase(getVideoSeries.pending, (state, action) => {
      state.videoLoadingSeries = true;
    });
    builder.addCase(getVideoSeries.fulfilled, (state, action) => {
      state.videoSeries = action.payload.results;
      state.videoLoadingSeries = false;
    });
    builder.addCase(getVideoSeries.rejected, (state, action) => {
      console.log("error");
    });
    ////////////////////////////////// back drops and posters
    builder.addCase(getBackDropsSeries.pending, (state, action) => {
      state.backDropsSeriesLoading = true;
    });
    builder.addCase(getBackDropsSeries.fulfilled, (state, action) => {
      state.backDropsSeries = action.payload;
      state.backDropsSeriesLoading = false;
    });
    builder.addCase(getBackDropsSeries.rejected, (state, action) => {
      console.log("error");
    });
    ////////////////////////////////////// recommendation series
    builder.addCase(getRecommendSeris.pending, (state, action) => {
      // console.log("keeping");
      state.recommendationLoadingSeries = true;
    });
    builder.addCase(getRecommendSeris.fulfilled, (state, action) => {
      state.recommendationSeries = action.payload.results;
      state.recommendationLoadingSeries = false;
    });
    builder.addCase(getRecommendSeris.rejected, (state, action) => {
      console.log("error");
    });
  },
});

export const series = homeSeriesSlice.reducer;
export const { increment, decrement, aboutRecommend } = homeSeriesSlice.actions;
