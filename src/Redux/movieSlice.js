import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import animeapi from "../Api/animeapi";
import { APIKey } from '../Api/apikey'
import movieapi from '../Api/movieapi'

//Movies fetch from OmDB
export const FetchAysncMovie = createAsyncThunk('app/FetchAysncMovie',async (searchText)=>{
     const response = await movieapi.get(`?apikey=${APIKey}&s=${searchText}&typ=movie`)
     return response.data.Search
});
export const FetchAysncShow = createAsyncThunk('app/FetchAysncShow',async (searchText)=>{
     const response = await movieapi.get(`?apikey=${APIKey}&s=${searchText}&typ=show`)
     return response.data.Search
});

export const FetchAysncDetail = createAsyncThunk('app/FetchAysncDetail',async (id)=>{
     const response = await movieapi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
     return response.data
});
// Animes Fetch from 
export const FetchAysncAnime = createAsyncThunk('app/FetchAysncAnime',async (searchText)=>{
     const response = await animeapi.get(`search/anime?q=${searchText}&page=1`);
     return response.data.results
});


// Reducers
const movieSlice = createSlice({
    name:'app',
    initialState:{
        movies:[],
        shows:[],
        detail:[],
        animes:[]
       
    },
    reducers:{},
 extraReducers:{
     [FetchAysncMovie.pending]:()=>{console.log('......pending');},
     [FetchAysncMovie.rejected]:()=>{console.log('error');},
     [FetchAysncMovie.fulfilled]:(state,{payload})=>{return {...state,movies:payload}},
     [FetchAysncShow.fulfilled]:(state,{payload})=>{return {...state,shows:payload}},
     [FetchAysncDetail.fulfilled]:(state,{payload})=>{  return {...state,detail:payload}},
     [FetchAysncAnime.fulfilled]:(state,{payload})=>{ return {...state,animes:payload}},
 }  
})
export const getAllMovies = (state)=>state.app.movies;
export const getAllShows = (state)=>state.app.shows;
export const getallAnimes = (state)=>state.app.animes;
export const getAllDetail = (state)=>state.app.detail;




export  default movieSlice.reducer;