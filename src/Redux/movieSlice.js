import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import animeapi from "../Api/animeapi";
import { APIKey } from "../Api/apikey";
import movieapi from "../Api/movieapi";

//Movies fetch from OmDB
export const FetchAysncMovie = createAsyncThunk(
  "app/FetchAysncMovie",
  async (searchText) => {
    const response = await movieapi.get(
      `?apikey=${APIKey}&s=${searchText}&typ=movie`
    );
    return response.data.Search;
  }
);
export const FetchAysncMovieOrShowDetail = createAsyncThunk(
  "app/FetchAysncMovieOrShowDetail",
  async (id) => {
    const response = await movieapi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);

// Shows
export const FetchAysncShow = createAsyncThunk(
  "app/FetchAysncShow",
  async (searchText) => {
    const response = await movieapi.get(
      `?apikey=${APIKey}&s=${searchText}&typ=show`
    );
    return response.data.Search;
  }
);

// Animes Fetch from
export const FetchAysncAnime = createAsyncThunk(
  "app/FetchAysncAnime",
  async (searchText) => {
    const response = await animeapi.get(`search/anime?q=${searchText}&page=1`);
    return response.data.results;
  }
);
export const FetchAysncTopAnime = createAsyncThunk(
  "app/FetchAysncTopAnime",
  async () => {
    const response = await animeapi.get(`top/anime`);
    return response.data.top;
  }
);
export const FetchAysncAnimeDetail = createAsyncThunk(
  "app/FetchAysncAnimeDetail",
  async (id) => {
    const response = await animeapi.get(`anime/${id}`);
    return response.data;
  }
);

// Reducers
const movieSlice = createSlice({
  name: "app",
  initialState: {
    movies: [],
    shows: [],
    movieOrShowdetail: [],
    animes: [],
    topanimes: [],
    animeDetail: [],
  },
  reducers: {},
  extraReducers: {
    [FetchAysncMovie.pending]: () => {
      console.log("......pending");
    },
    [FetchAysncMovie.rejected]: () => {
      console.log("error");
    },
    [FetchAysncMovie.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [FetchAysncShow.fulfilled]: (state, { payload }) => {
      return { ...state, shows: payload };
    },
    [FetchAysncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      return { ...state, moviedetail: payload };
    },
    // Anime page
    [FetchAysncAnime.fulfilled]: (state, { payload }) => {
      return { ...state, animes: payload };
    },
    [FetchAysncTopAnime.fulfilled]: (state, { payload }) => {
      return { ...state, topanimes: payload };
    },
    [FetchAysncAnimeDetail.fulfilled]: (state, { payload }) => {
      return { ...state, animeDetail: payload };
    },
  },
});
// Movies
export const getAllMovies = (state) => state.app.movies;
export const getMovieorShowDetail = (state) => state.app.movieorShowdetail;
// Shows
export const getAllShows = (state) => state.app.shows;
// Animes
export const getallAnimes = (state) => state.app.animes;
export const getallTopAnimes = (state) => state.app.topanimes;
export const getAnimeDetail = (state) => state.app.animeDetail;

export default movieSlice.reducer;
