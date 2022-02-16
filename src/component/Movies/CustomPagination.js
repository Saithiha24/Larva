import { Pagination } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { getTrendingMovies } from "../../Redux/movieSlice";

const CustomPagination = ({ setPage }) => {
  const totalPages = useSelector(getTrendingMovies);
  return (
    <div className="d-flex justify-content-center aligen-items-center">
      <Pagination
        count={totalPages.total_pages}
        color="primary"
        hidePrevButton
        hideNextButton
        onChange={(e) => {
          setPage(e.target.textContent);
          window.scroll(0, 0);
        }}
      />
    </div>
  );
};

export default CustomPagination;
