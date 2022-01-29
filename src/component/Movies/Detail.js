import { Rating } from "@mui/material";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  FetchAysncMovieOrShowDetail,
  getMovieorShowDetail,
} from "../../Redux/movieSlice";

const MovieDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchAysncMovieOrShowDetail(id));
  }, [dispatch, id]);
  const detail = useSelector(getMovieorShowDetail);

  return (
    <section>
      <div className="d-sm-flex py-3">
        <img src={detail.Poster} alt="movie logo" className="ms-5 ms-sm-0" />
        <div className="ms-sm-5 ms-2">
          <h3 className="text-white">{detail.Title}</h3>
          <ul className="d-sm-flex me-5 text-white list-unstyled justify-content-between">
            <li className="d-flex">
              <Rating name="read-only" readOnly max={1} value={1} />
              <small>{detail.imdbRating}</small>
            </li>
            <li>
              <small className="ms-3">{detail.Rated}</small>
            </li>
            <li>
              <small className="ms-3">episodes-{detail.Runtime}</small>
            </li>
            <li>
              <small>Release-{detail.Released}</small>
            </li>
          </ul>
          <div className="mt-5 text-white">
            <h5 className="d-flex justify-content-center align-items-center">
              Overview
            </h5>
            <p className="p-3">{detail.Plot}</p>
          </div>
        </div>
      </div>
      {/* {watchVideo && (
        <div style={{ height: "400px" }}>
       <ReactPlayer
            url={animeDetail.trailer_url}
            className="react-player"
            playing
            width="100%"
            height="100%"
            controls={false}
          />
        </div>
      )} */}
    </section>
  );
};

export default MovieDetail;
