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
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./anime.css";

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
  console.log(topanimes);
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
      <Row className="mt-4" style={{ width: "100%" }}>
        {showAnimes.map((anime) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={anime.mal_id}
            className="animeComponent"
          >
            <Link to={`${anime.mal_id}`} style={{ textDecoration: "none" }}>
              <div>
                <img src={anime.image_url} alt="cover" width="100%" />
                <div>
                  <h3 className="text-white">{anime.title}</h3>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Anime;
