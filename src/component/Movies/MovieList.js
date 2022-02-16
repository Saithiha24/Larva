import { Rating } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { img_300 } from "../../Api/movieapi";
import Loading from "../Loading";
import CustomPagination from "./CustomPagination";

const MovieList = ({ showMovies, setPage }) => {
  return (
    <div>
      {showMovies ? (
        <Row className="mt-4" style={{ width: "100%" }}>
          {showMovies.map((movie) => (
            <Col
              xs={4}
              sm={4}
              md={4}
              lg={3}
              xl={2}
              key={movie.id}
              className="movieComponent mt-5 mt-sm-3"
            >
              <Link to={`${movie.id}`} style={{ textDecoration: "none" }}>
                <div>
                  <div className="fixed-top ms-3 text-white">
                    <Rating
                      name="read-only"
                      readOnly
                      max={1}
                      value={1}
                      style={{ zIndex: 3 }}
                    />
                    <span>{movie.vote_average}</span>
                  </div>

                  <img
                    src={
                      movie.poster_path
                        ? `${img_300}${movie.poster_path}`
                        : "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
                    }
                    alt="cover"
                    width="100%"
                  />
                  <div className="d-flex flex-column">
                    <span
                      className="text-white"
                      style={{ fontWeight: 600, fontSize: 19 }}
                    >
                      {movie.title ||
                        movie.original_name ||
                        movie.original_title}
                    </span>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
          <CustomPagination setPage={setPage} />
        </Row>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MovieList;
