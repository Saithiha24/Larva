import Rating from "@mui/material/Rating";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AnimeList = ({ showAnimes }) => {
  return (
    <div>
      <Row className="mt-4" style={{ width: "100%" }}>
        {showAnimes.map((anime) => (
          <Col
            xs={6}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            key={anime.mal_id}
            className="animeComponent mt-4 mt-sm-0"
          >
            <Link to={`${anime.mal_id}`} style={{ textDecoration: "none" }}>
              <div>
                <div className="fixed-top ms-3 text-white">
                  <Rating name="read-only" readOnly max={1} value={1} />
                  <span>{anime.score}</span>
                </div>

                <img src={anime.image_url} alt="cover" width="100%" />
                <div>
                  <p className="text-white">{anime.title}</p>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AnimeList;
