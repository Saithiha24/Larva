import { Button, CircularProgress } from "@material-ui/core";
import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { APIKey } from "../../Api/apikey";
import { img_300, movieAPI } from "../../Api/movieapi";
import { v4 } from "uuid";

const MovieDetail = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState([]);
  const fetchDetail = async (id) => {
    let { data } = await movieAPI.get(
      `/movie/${id}?api_key=${APIKey}&language=en-US`
    );
    setDetail(data);
  };
  useEffect(() => {
    fetchDetail(id);
    return () => setDetail([]);
  }, [id]);

  return (
    <section>
      {detail.length !== 0 ? (
        <div
          className="d-sm-flex py-3 ms-2"
          style={{
            backgroundImage:
              `url(${img_300}${detail.backdrop_path})` ||
              "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backdropFilter: "blur(10px)",
          }}
        >
          <img
            src={
              `${img_300}${detail.poster_path}` ||
              "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
            }
            alt="movie logo"
            className="ms-5 ms-sm-0"
          />
          <div className="ms-sm-5 ms-2">
            <h3 className="text-white">
              {detail.original_name || detail.title}
            </h3>
            <ul className="d-sm-flex me-5 text-white list-unstyled justify-content-between">
              <li className="d-flex">
                <Rating name="read-only" readOnly max={1} value={1} />
                <small>{detail.vote_average}</small>
              </li>
              <li>
                <small className="ms-3">
                  {detail.adult ? "PG-adult" : "PG-children"}
                </small>
              </li>
              <li>
                <small className="ms-3">RunTime-{detail.runtime}mins</small>
              </li>
              <li>
                <Button className="text-white" onClick={() => {}}>
                  <i className="fas fa-video me-2"></i>
                  Watch Video
                </Button>
              </li>
            </ul>
            <div>
              <ul className="d-sm-flex me-5 text-white list-unstyled justify-content-between">
                {detail.genres?.map((genre) => (
                  <li key={v4()}>{genre[1]}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5 text-white">
              <h5 className="d-flex justify-content-center align-items-center">
                Overview
              </h5>
              <p className="p-3">{detail.overview}</p>
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
    </section>
  );
};

export default MovieDetail;
