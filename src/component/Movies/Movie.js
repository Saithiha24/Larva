import {
  Container,
  makeStyles,
  CardActionArea,
  CardMedia,
  Card,
  Button,
  Input,
} from "@material-ui/core";
import "./movie.css";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { FetchAysncMovie, getAllMovies } from "../../Redux/movieSlice";
import MovieList from "./MovieList";

const useStyle = makeStyles((theme) => {
  return {
    input: {
      background: "white",
      paddingLeft: "10px",
    },
    gridContainer: {
      marginTop: 30,
    },
    form: {
      display: "flex",
      marginTop: 30,
    },
  };
});

const Movie = () => {
  // dispatch
  const dispatch = useDispatch();
  // Hook
  const [searchText, setsearchText] = useState("");
  // Fetching Anime
  useEffect(() => {
    let searchText = "Harry Potter";
    dispatch(FetchAysncMovie(searchText));
  }, [dispatch]);
  // ShowAnime

  // Function
  const submitHandle = (e) => {
    if (searchText === "") {
      return alert("Please Type Someting in the Box");
    }
    e.preventDefault();
    dispatch(FetchAysncMovie(searchText));
  };

  const classes = useStyle();
  // useSelector
  const movies = useSelector(getAllMovies);
  return (
    <Container fluid="true">
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://c4.wallpaperflare.com/wallpaper/855/75/832/arrow-flash-the-flash-gotham-wallpaper-preview.jpg"
            alt="background-image"
          />
        </CardActionArea>
      </Card>
      {/* background Iamge */}
      <form onSubmit={submitHandle} className={classes.form}>
        <Input
          className={classes.input}
          color="secondary"
          fullWidth
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <Button variant="contained" color="secondary" type="submit">
          Search
        </Button>
      </form>
      {/* If animes is Null this will not be showed*/}
      <MovieList showMovies={movies} />
    </Container>
  );
};

export default Movie;
