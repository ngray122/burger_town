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

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
      <PaginationLink onClick={() => setCurrentPage(currentPage - 1)}>
        back
      </PaginationLink>
      {console.log("currentpage", currentPage)}

      {pageNumbers.map((number) => (
        <PaginationItem key={number}>
          <PaginationLink onClick={() => paginate(number)}>
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationLink next onClick={() => setCurrentPage(currentPage + 1)}>
        next
      </PaginationLink>
    </Pagination>
  );
};

export default ItemPagination;
