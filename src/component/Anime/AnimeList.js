import Rating from "@mui/material/Rating";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import CustomPagination from "./CustomPagination";
import { v4 } from "uuid";

const AnimeList = ({ showAnimes, setPage }) => {
  return (
    <div>
      {showAnimes.length !== 0 ? (
        <Row className="mt-4" style={{ width: "100%" }}>
          {showAnimes.map((anime) => (
            <Col
              xs={4}
              sm={4}
              md={4}
              lg={3}
              xl={2}
              key={v4()}
              className="animeComponent mt-4 mt-sm-0"
            >
              <Link to={`${anime.mal_id}`} style={{ textDecoration: "none" }}>
                <div>
                  <div className="fixed-top ms-3 text-white">
                    <Rating name="read-only" readOnly max={1} value={1} />
                    <span>{anime.score}</span>
                  </div>

                  <img
                    src={
                      anime.images.jpg.image_url ||
                      "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg"
                    }
                    alt="cover"
                    width="100%"
                  />
                  <div>
                    <p className="text-white">
                      {anime.title_english ||
                        anime.title ||
                        anime.title_japanese}
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
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default AnimeList;
