import { Button } from "@material-ui/core";
import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import { useParams } from "react-router";

import { v4 } from "uuid";
import animeapi from "../../Api/animeapi";

const AnimeDetail = () => {
  const { id } = useParams();
  const [animeDetail, setAnimeDetail] = useState([]);
  const fetchDetail = async (id) => {
    const { data } = await animeapi.get(`anime/${id}`);
    setAnimeDetail(data.data);
  };
  useEffect(() => {
    fetchDetail(id);
    return () => setAnimeDetail([]);
  }, [id]);
  const [watchVideo, setWatchVideo] = useState(false);

  return (
    <section>
      {animeDetail.length !== 0 ? (
        <div className="d-sm-flex py-3 ms-2">
          <img
            src={
              // animeDetail.images.webp.image_url |
              "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
            }
            alt="anime logo"
            className="ms-5 ms-sm-0"
          />
          <div className="ms-sm-5 ms-2">
            <h3 className="text-white">
              {`${animeDetail.title}-${animeDetail.title_japanese}
            (${animeDetail.title_english})`}
            </h3>
            <ul className="d-sm-flex me-5 text-white list-unstyled justify-content-between">
              <li className="d-flex">
                <Rating name="read-only" readOnly max={1} value={1} />
                <small>{animeDetail.score}</small>
              </li>
              <li>
                <small className="ms-3">{animeDetail.rating}</small>
              </li>
              <li>
                <small className="ms-3">episodes-{animeDetail.episodes}</small>
              </li>
              <li>
                <Button
                  className="text-white"
                  onClick={() => {
                    setWatchVideo(true);
                  }}
                >
                  <i className="fas fa-video me-2"></i>
                  Watch Video
                </Button>
              </li>
            </ul>
            <div>
              <ul className="d-sm-flex me-5 text-white list-unstyled justify-content-between">
                {animeDetail.genres?.map((genere) => (
                  <li key={v4()}>{genere.name}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5 text-white">
              <h5 className="d-flex justify-content-center align-items-center">
                Overview
              </h5>
              <p className="p-3">{animeDetail.synopsis}</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "60vh",
            margin: "30px 0px",
          }}
        >
          <CircularProgress size={140} thickness={1} color="primary" />
        </div>
      )}
      {watchVideo && (
        <ReactPlayer
          url={animeDetail.trailer.embed_url}
          width="100%"
          controls={true}
        />
      )}
    </section>
  );
};

export default AnimeDetail;
