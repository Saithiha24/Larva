import { Container } from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container style={{ width: "100%", color: "white" }}>
      <section>
        <h1 className="d-flex justify-content-center align-items-center">
          What is Larva
        </h1>
        <p className="">
          Larva is a Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </section>
      <section>
        <Row>
          <Col xs={12} sm={6}>
            <img
              style={{ width: "100%", height: "100%" }}
              alt="dbName"
              src="https://omdb.mathub.io/img/logo-omdb.png"
            />
          </Col>
          <Col xs={12} sm={6} className="pt-0 pt-sm-5">
            <h3 className="d-flex justify-content-center align-items-center mb-3">
              <a
                className="text-decoration-none"
                href="http://www.omdbapi.com/"
              >
                omDb Movie api
              </a>
            </h3>
            <h6 className="d-flex justify-content-center align-items-center">
              How do I create using omDB movies api
            </h6>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Home;
