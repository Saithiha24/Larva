import { Container, makeStyles, Button, Input } from "@material-ui/core";
import "./movie.css";
import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";
import { img_300, movieAPI } from "../../Api/movieapi";
import AliceCarousel from "react-alice-carousel";
import { APIKey } from "../../Api/apikey";
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
  };
});

const Movie = () => {
  // Hook
  const [searchText, setsearchText] = useState("");
  const [page, setPage] = useState(1);
  const [Trendmovies, setTrendMovies] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  // Fetching Movie
  const fetchMovie = async (page) => {
    const { data } = await movieAPI.get(
      `/discover/movie?api_key=${APIKey}&page=${page}`
    );
    setTrendMovies(data.results);
    setTotalPage(data.total_pages);
  };
  useEffect(() => {
    fetchMovie(page);
    return () => setTrendMovies([]);
  }, [page]);
  // Function
  const submitHandle = (e) => {
    if (searchText === "") {
      return alert("Please Type Someting in the Box");
    }
    e.preventDefault();
  };
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
  const classes = useStyle();
  let items = Trendmovies.map((movie) => (
    <Link
      key={movie.id}
      to={`movie/${movie.id}`}
      className={classes.carouselItem}
    >
      <img
        src={
          movie.poster_path
            ? `${img_300}${movie.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
        }
        alt="cover"
        height="250"
      />
      <span className="text-white" style={{ fontWeight: 600, fontSize: 19 }}>
        {movie.title || movie.original_name || movie.original_title}
      </span>
    </Link>
  ));

  return (
    <Container fluid="true">
      <div className={classes.carousel}>
        {Trendmovies.length !== 0 ? (
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
            <CircularProgress size={140} thickness={1} color="primary" />
          </div>
        )}
      </div>
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
      <MovieList
        showMovies={Trendmovies}
        setPage={setPage}
        totalPage={totalPage}
      />
    </Container>
  );
};

export default Movie;
