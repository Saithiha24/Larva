import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import animeapi from "../../Api/animeapi";

const CustomPagination = ({ setPage }) => {
  const [totalPages, setTotalPages] = useState();
  const totalPaginiation = async () => {
    const response = await animeapi("/anime");
    setTotalPages(response.data.pagination.last_visible_page);
  };
  useEffect(() => {
    totalPaginiation();
  }, []);
  return (
    <div className="d-flex justify-content-center aligen-items-center">
      <Pagination
        count={totalPages}
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
