import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const data = {
  // episodes
  episodes: [],
  episodesLoading: false,
  // cast & crew epidodes
  castCrewEpisodes: {},
  castCrewEpisodesLoading: false,
};
/////////////////// episodes
export const getEpisodes = createAsyncThunk(
  "getEpisodes",
  async ({ idseries, season_number }, asyncThunk) => {
    const { rejectWithValue } = asyncThunk;

    try {
      const getAllEpisodes = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${idseries}/season/${season_number}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMzExNjk3MC44Mzk3NDUsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e80W_VBjmWwDttG4PzoI3Ak-q5PSt2vsgLYRrfpvcWE",
        },
      });
      return getAllEpisodes.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);
//////////////////// cast crew episodes
export const getCastCrewEpisodes = createAsyncThunk(
  "getCastCrewEpisodes",
  async ({ idseries, season_number, episodenum }, asyncThunk) => {
    const { rejectWithValue } = asyncThunk;

    try {
      const getAllWorker = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${idseries}/season/${season_number}/episode/${episodenum}/credits`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTY4NjZkMTkzMGZkYjc5OTc4MWMzNjAzZmM0ZTJkYyIsIm5iZiI6MTcyMzExNjk3MC44Mzk3NDUsInN1YiI6IjY2MmUwYTNmMjRmMmNlMDEyNjJhYWY1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e80W_VBjmWwDttG4PzoI3Ak-q5PSt2vsgLYRrfpvcWE",
        },
      });
      return getAllWorker.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

const aboutSeasonsAndEpisodesSlice = createSlice({
  name: "episodes",
  initialState: data,

  extraReducers: (builder) => {
    // episodes
    builder.addCase(getEpisodes.pending, (state, action) => {
      state.episodesLoading = true;
    });
    builder.addCase(getEpisodes.fulfilled, (state, action) => {
      state.episodes = action.payload.episodes;
      state.episodesLoading = false;
    });
    // cast crew episodes
    builder.addCase(getCastCrewEpisodes.pending, (state, action) => {
      state.castCrewEpisodesLoading = true;
    });
    builder.addCase(getCastCrewEpisodes.fulfilled, (state, action) => {
      state.castCrewEpisodes = action.payload;
      state.castCrewEpisodesLoading = false;
    });
  },
});

export const episodesAndCastCrew = aboutSeasonsAndEpisodesSlice.reducer;
