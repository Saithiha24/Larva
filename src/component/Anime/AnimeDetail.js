import React from "react";
import { useParams } from "react-router";

const AnimeDetail = () => {
  const { id } = useParams();
  return (
    <h1 style={{ color: "white" }}>
      I will code this page Tomorrow.So be patient. This anime id is ${id}
    </h1>
  );
};

export default AnimeDetail;
