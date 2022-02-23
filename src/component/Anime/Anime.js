import { Container, makeStyles, Button, Input } from "@material-ui/core";
import AliceCarousel from "react-alice-carousel";
import React, { useEffect, useState } from "react";
import "./anime.css";
import AnimeList from "./AnimeList";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import animeapi from "../../Api/animeapi";
import { CircularProgress } from "@mui/material";

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
      marginTop: 20,
    },
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
      backgroundImage:
        "url(https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
      marginTop: 20,
    },
    process: {
      color: theme.primary,
    },
  };
});

const Anime = () => {
  // Hook
  const [searchText, setsearchText] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [showAnimes, setShowAnimes] = useState([]);
  // Controller
  const fetchAnime = async (page) => {
    const { data } = await animeapi.get(`/anime?page=${page}`);
    setShowAnimes(data.data);
    setTotalPage(data.pagination.last_visible_page);
  };
  // const submitHandle = async(e)=>{
  //   e.preventDefault();
  //   const {data} =
  // }
  // Fetching Anime
  useEffect(() => {
    fetchAnime(page);
    return () => setShowAnimes([]);
  }, [searchText, page]);

  const classes = useStyle();
  // Carousel Items
  let items = showAnimes.map((anime) => (
    <Link to={`${anime.mal_id}`} key={v4()} className={classes.carouselItem}>
      <img
        src={
          anime.images.jpg.image_url ||
          "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
        }
        alt={anime.title}
        height="250"
      />
      <p className="text-white">
        {anime.title_english || anime.title || anime.title_japanese}
      </p>
    </Link>
  ));
  const responsive = {
    0: {
      items: 2,
    },
    320: {
      items: 2,
    },
    512: {
      items: 2,
    },
    760: {
      items: 3,
    },
    1040: {
      items: 6,
    },
  };

  return (
    <Container fluid="true">
      {/* BackGround Image*/}
      <div className={classes.carousel}>
        {showAnimes.length !== 0 ? (
          <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
          />
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              margin: "30px 0px",
            }}
          >
            <CircularProgress
              size={140}
              thickness={1}
              className={classes.process}
            />
          </div>
        )}
      </div>
      <form className={classes.form}>
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
      <AnimeList
        showAnimes={showAnimes}
        setPage={setPage}
        totalPage={totalPage}
      />
    </Container>
  );
};

export default Anime;
