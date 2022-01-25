import {
  Container,
  makeStyles,
  CardActionArea,
  CardMedia,
  Card,
  Button,
  Input,
} from "@material-ui/core";

import React, { useEffect, useState } from "react";
import {
  FetchAysncAnime,
  FetchAysncTopAnime,
  getallAnimes,
  getallTopAnimes,
} from "../../Redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import "./anime.css";
import AnimeList from "./AnimeList";

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

const Anime = () => {
  // dispatch
  const dispatch = useDispatch();
  // Hook
  const [searchText, setsearchText] = useState("");
  // Fetching Anime
  useEffect(() => {
    dispatch(FetchAysncTopAnime());
  }, [dispatch]);
  // ShowAnime

  // Function
  const submitHandle = (e) => {
    if (searchText === "") {
      return alert("Please Type Someting in the Box");
    }
    e.preventDefault();
    dispatch(FetchAysncAnime(searchText));
  };

  const classes = useStyle();
  // useSelector
  const animes = useSelector(getallAnimes);
  const topanimes = useSelector(getallTopAnimes);
  const showAnimes = animes.length === 0 ? topanimes : animes;
  return (
    <Container fluid="true">
      {/* BackGround Image*/}
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="340"
            image="https://c4.wallpaperflare.com/wallpaper/981/482/476/anime-4k-image-download-hd-wallpaper-preview.jpg"
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
      <AnimeList showAnimes={showAnimes} />
    </Container>
  );
};

export default Anime;
