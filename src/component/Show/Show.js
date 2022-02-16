import {
  Container,
  makeStyles,
  CardActionArea,
  CardMedia,
  Card,
  Button,
  Input,
} from "@material-ui/core";
import "./show.css";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import ShowList from "./ShowList";

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

const Show = () => {
  // // dispatch
  // const dispatch = useDispatch();
  // // Hook
  // const [searchText, setsearchText] = useState("");
  // // useSelector
  // const shows = useSelector(getAllShows);
  // // Fetching Anime
  // useEffect(() => {
  //   let searchText = "Friend";
  //   dispatch(FetchAysncShow(searchText));
  // }, [dispatch, shows, searchText]);
  // // ShowAnime
  // // Function
  // const submitHandle = (e) => {
  //   e.preventDefault();
  //   if (searchText === "") {
  //     return alert("Please Type Someting in the Box");
  //   }
  //   dispatch(FetchAysncShow(searchText));
  // };
  // const classes = useStyle();
  // return (
  //   <Container fluid="true">
  //     <Card>
  //       <CardActionArea>
  //         <CardMedia
  //           component="img"
  //           height="340"
  //           image="https://c4.wallpaperflare.com/wallpaper/855/75/832/arrow-flash-the-flash-gotham-wallpaper-preview.jpg"
  //           alt="background-image"
  //         />
  //       </CardActionArea>
  //     </Card>
  //     {/* background Iamge */}
  //     <form onSubmit={submitHandle} className={classes.form}>
  //       <Input
  //         className={classes.input}
  //         color="secondary"
  //         fullWidth
  //         value={searchText}
  //         onChange={(e) => {
  //           setsearchText(e.target.value);
  //         }}
  //       />
  //       <Button variant="contained" color="secondary" type="submit">
  //         Search
  //       </Button>
  //     </form>
  //     {/* If animes is Null this will not be showed*/}
  //     <ShowList showShows={shows} />
  //   </Container>
  // );
};

export default Show;
