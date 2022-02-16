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
import { FetchAysncTopAnime, getallTopAnimes } from "../../Redux/movieSlice";
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
  // useSelector
  let topanimes = useSelector(getallTopAnimes);
  let showAnimes = topanimes;
  console.log(showAnimes);
  // Hook
  const [searchText, setsearchText] = useState("");
  const [page, setPage] = useState(1);
  // Fetching Anime
  useEffect(() => {
    dispatch(FetchAysncTopAnime(page));
    return () => (showAnimes = []);
  }, [dispatch, searchText, page]);
  // ShowAnime

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
      <AnimeList showAnimes={showAnimes} setPage={setPage} />
    </Container>
  );
};

export default Anime;
