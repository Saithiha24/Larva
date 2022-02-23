import { Rating } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { img_300 } from "../../Api/movieapi";
import Loading from "../Loading";
import CustomPagination from "./CustomPagination";

const ShowList = ({ shows, setPage, totalPage }) => {
  return (
    <div>
      {shows.length !== 0 ? (
        <Row className="mt-4" style={{ width: "100%" }}>
          {shows.map((show) => (
            <Col
              xs={4}
              sm={4}
              md={4}
              lg={3}
              xl={2}
              key={show.id}
              className="movieComponent mt-5 mt-sm-3"
            >
              <Link to={`${show.id}`} style={{ textDecoration: "none" }}>
                <div>
                  <div className="fixed-top ms-3 text-white">
                    <Rating
                      name="read-only"
                      readOnly
                      max={1}
                      value={1}
                      style={{ zIndex: 3 }}
                    />
                    <span>{show.vote_average}</span>
                  </div>

                  <img
                    src={
                      show.poster_path
                        ? `${img_300}${show.poster_path}`
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
                      {show.title || show.original_name || show.original_title}
                    </span>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
          <CustomPagination setPage={setPage} totalPage={totalPage} />
        </Row>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ShowList;
