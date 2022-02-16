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
import {
  FetchAsyncTrendingMovies,
  getTrendingMovies,
} from "../../Redux/movieSlice";
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
  const [page, setPage] = useState(1);
  // useSelector
  const Trendmovies = useSelector(getTrendingMovies);
  // Fetching Movie
  useEffect(() => {
    dispatch(FetchAsyncTrendingMovies(page));
    // eslint-disable-next-line
  }, [dispatch, page]);
  // Function
  const submitHandle = (e) => {
    if (searchText === "") {
      return alert("Please Type Someting in the Box");
    }
    e.preventDefault();
  };

  const classes = useStyle();

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
          required
        />
        <Button variant="contained" color="secondary" type="submit">
          Search
        </Button>
      </form>
      {/* If animes is Null this will not be showed*/}
      <MovieList showMovies={Trendmovies.results} setPage={setPage} />
    </Container>
  );
};

export default Movie;
