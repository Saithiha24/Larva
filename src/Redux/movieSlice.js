import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import animeapi from "../Api/animeapi";
import { APIKey } from '../Api/apikey'
import movieapi from '../Api/movieapi'

                     //Movies fetch from OmDB
export const FetchAysncMovie = createAsyncThunk('app/FetchAysncMovie',async (searchText)=>{
     const response = await movieapi.get(`?apikey=${APIKey}&s=${searchText}&typ=movie`)
     return response.data.Search
});
export const FetchAysncDetail = createAsyncThunk('app/FetchAysncDetail',async (id)=>{
     const response = await movieapi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
     return response.data
});

                             // Shows
export const FetchAysncShow = createAsyncThunk('app/FetchAysncShow',async (searchText)=>{
     const response = await movieapi.get(`?apikey=${APIKey}&s=${searchText}&typ=show`)
     return response.data.Search
});

                        // Animes Fetch from 
export const FetchAysncAnime = createAsyncThunk('app/FetchAysncAnime',async (searchText)=>{
     const response = await animeapi.get(`search/anime?q=${searchText}&page=1`);
     return response.data.results
});
export const FetchAysncTopAnime = createAsyncThunk('app/FetchAysncTopAnime',async()=>{
     const response = await animeapi.get(`top/anime`);
     return response.data.top
});


// Reducers
const movieSlice = createSlice({
    name:'app',
    initialState:{
        movies:[],
        shows:[],
        moviedetail:[],
        animes:[],
        topanimes:[],
       
    },
    reducers:{},
 extraReducers:{
     [FetchAysncMovie.pending]:()=>{console.log('......pending');},
     [FetchAysncMovie.rejected]:()=>{console.log('error');},
     [FetchAysncMovie.fulfilled]:(state,{payload})=>{return {...state,movies:payload}},
     [FetchAysncShow.fulfilled]:(state,{payload})=>{return {...state,shows:payload}},
     [FetchAysncDetail.fulfilled]:(state,{payload})=>{  return {...state,moviedetail:payload}},
     // Anime page
     [FetchAysncAnime.fulfilled]:(state,{payload})=>{ return {...state,animes:payload}},
     [FetchAysncTopAnime.fulfilled]:(state,{payload})=>{ return {...state,topanimes:payload}},
 }   
});
// Movies
export const getAllMovies = (state)=>state.app.movies;
export const getAllDetail = (state)=>state.app.moviedetail;
// Shows
export const getAllShows = (state)=>state.app.shows;
// Animes
export const getallAnimes = (state)=>state.app.animes;
export const getallTopAnimes = (state)=>state.app.topanimes;




export  default movieSlice.reducer;