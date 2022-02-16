import axios from "axios";

export const movieAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export const img_300 = "https://image.tmdb.org/t/p/w300";
export const img_500 = "https://image.tmdb.org/t/p/w500";
