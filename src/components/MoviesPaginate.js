import React from "react";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getMoviesByPage } from '../Redux/action/MoviesAction'
const MoviesPaginate = () => {
  const dispatchMovies = useDispatch();
  const [numberPages, setNumberPages] = useState(0);
  
  const pages = useSelector((state) => state.pageCount)
  useEffect(() => {
    // setNumberPages(pages)
    setNumberPages(pages)
  }, [pages]);
  // End Get Current Page
  const getNumberPage = (page) => {
    dispatchMovies(getMoviesByPage(page,numberPages))
  }
  const handlePageClick = (data) => {
    getNumberPage(data.selected + 1)
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={numberPages}
      previousLabel="< previous"
      containerClassName="pagination my-5 align-items-center justify-content-center text-light"
      pageClassName="page-item"
      pageLinkClassName="item-pagination"
      nextClassName="page-item"
      nextLinkClassName="item-pagination next-pag"
      previousClassName="page-item"
      previousLinkClassName="item-pagination previous-pag"
      breakClassName="page-item"
      breakLinkClassName="item-pagination"
      activeLinkClassName="active-pagination"
    />
  );
};

export default MoviesPaginate;
