import React from "react";
import { Pagination, PaginationLink, PaginationItem } from "reactstrap";

const ItemPagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  const previousPage = (e) => currentPage - 1;
  const nextPage = (e) => currentPage + 1;
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
      <PaginationLink onClick={() => setCurrentPage(currentPage - 1)}>
        jdfhskdf
      </PaginationLink>
      {console.log("currentpage", currentPage)}

      {pageNumbers.map((number) => (
        <PaginationItem key={number}>
          <PaginationLink onClick={(e) => paginate(number)}>
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationLink next onClick={(e) => nextPage()}>
        jdfhskdf
      </PaginationLink>
    </Pagination>
  );
};

export default ItemPagination;
