import { Card, CardActionArea, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const AnimeSlide = ({ animes }) => {
  return (
    <>
      <Typography
        variant="h5"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "10px",
          color: "white",
        }}
      >
        Anime
      </Typography>
      <div className="slide-container">
        <Slide xs={4}>
          {animes.map((anime) => (
            <Col key={anime.mal_id} xs={4}>
              <Link
                to={`component/anime/${anime.mal_id}`}
                style={{ textDecoration: "none" }}
              >
                <img src={anime.image_url} alt="anime" />
              </Link>
            </Col>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default AnimeSlide;
