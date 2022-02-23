import { Pagination } from "@mui/material";
import React from "react";
const CustomPagination = ({ setPage, totalPage }) => {
  return (
    <div className="d-flex justify-content-center aligen-items-center">
      <Pagination
        count={totalPage}
        style={{ marginTop: 20 }}
        color="primary"
        onChange={(e) => {
          setPage(e.target.textContent);
          window.scroll(0, 0);
        }}
      />
    </div>
  );
};

export default CustomPagination;
