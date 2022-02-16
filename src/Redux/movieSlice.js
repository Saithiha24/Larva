import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import animeapi from "../Api/animeapi";
import { APIKey } from "../Api/apikey";
import { movieAPI } from "../Api/movieapi";

//Movies fetch from OmDB\
// Trendiing Movies
export const FetchAsyncTrendingMovies = createAsyncThunk(
  "app/fetchAsyncTrendingMovies",
  async (page) => {
    const { data } = await movieAPI.get(
      `/trending/all/day?api_key=${APIKey}&page=${page}`
    );
    return data;
  }
);

// Animes Fetch from

export const FetchAysncTopAnime = createAsyncThunk(
  "app/FetchAysncTopAnime",
  async (page) => {
    const { data } = await animeapi.get(`/anime?page=${page}`);
    return data.data;
  }
);
export const FetchAysncAnimeDetail = createAsyncThunk(
  "app/FetchAysncAnimeDetail",
  async (id) => {
    const { data } = await animeapi.get(`anime/${id}`);
    return data.data;
  }
);

// Reducers
const movieSlice = createSlice({
  name: "app",
  initialState: {
    trendingMovie: [],
    movies: [],
    shows: [],
    movieOrShowdetail: [],
    animes: [],
    topanimes: [],
    animeDetail: [],
  },
  reducers: {},
  extraReducers: {
    [FetchAsyncTrendingMovies.pending]: (state) => {
      return {
        ...state,
        trendingMovies: [],
        movies: [],
        shows: [],
        movieOrShowdetail: [],
        animeDetail: [],
        topanimes: [],
      };
    },
    [FetchAsyncTrendingMovies.rejected]: () => {
      console.log("error");
    },
    [FetchAsyncTrendingMovies.fulfilled]: (state, { payload }) => {
      return { ...state, trendingMovie: payload };
    },
    // Anime page
    [FetchAysncTopAnime.fulfilled]: (state, { payload }) => {
      return { ...state, topanimes: payload };
    },
    [FetchAysncAnimeDetail.fulfilled]: (state, { payload }) => {
      return { ...state, animeDetail: payload };
    },
  },
});
// Movies
// export const getAllMovies = (state) => state.app.movies;
// export const getMovieorShowDetail = (state) => state.app.movieOrShowdetail;
export const getTrendingMovies = (state) => state.app.trendingMovie;
// Shows
// export const getAllShows = (state) => state.app.shows;
// Animes
export const getallTopAnimes = (state) => state.app.topanimes;
export const getAnimeDetail = (state) => state.app.animeDetail;

export default movieSlice.reducer;
