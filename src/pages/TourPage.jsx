import TourList from "../components/Product/TourList";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom";

import { useProducts } from "../contexts/ProductContext";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import ArrowCircleLeftSharpIcon from "@mui/icons-material/ArrowCircleLeftSharp";
import "../pages/style/pages.css";
import Footer from "../components/Footer/Footer";
const TourPage = () => {
  const { products, getProducts } = useProducts();
  const [page, setPage] = useState(0);

  const productPerPage = 8;
  const location = useLocation();

  const pageCount = Math.ceil(products.length / productPerPage);

  const pageVisited = page * productPerPage;

  const paginateProducts = products.slice(
    pageVisited,
    pageVisited + productPerPage
  );
  const changePage = ({ selected }) => {
    console.log(selected, "here");
    setPage(selected);
  };

  useEffect(() => {
    getProducts();
  }, [location.search]);
  return (
    <div>
      <TourList products={paginateProducts} />
      <ReactPaginate
        previousLabel={<ArrowCircleLeftSharpIcon />}
        nextLabel={<ArrowCircleRightSharpIcon />}
        onPageChange={changePage}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        previousLinkClassName="previousBtn"
        nextLinkClassName="nextBtn"
        activeClassName="activeBtn"
        disableClassName="disabled"
      />
      <Footer />
    </div>
  );
};

export default TourPage;
