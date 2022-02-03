import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading";

const MovieList = ({ showMovies }) => {
  return (
    <div>
      {showMovies.length !== 0 ? (
        <Row className="mt-4" style={{ width: "100%" }}>
          {showMovies.map((movie) => (
            <Col
              xs={4}
              sm={4}
              md={4}
              lg={3}
              xl={2}
              key={movie.imdbID}
              className="movieComponent mt-4 mt-sm-0"
            >
              <Link to={`${movie.imdbID}`} style={{ textDecoration: "none" }}>
                <div>
                  {/* No rating in Movie Api */}
                  {/* <div className="fixed-top ms-3 text-white">
                  <Rating name="read-only" readOnly max={1} value={1} />
                  <span>{movie.score}</span>
                </div> */}

                  <img src={movie.Poster} alt="cover" width="100%" />
                  <div>
                    <p className="text-white">
                      {movie.Title}({movie.Year})
                    </p>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MovieList;
