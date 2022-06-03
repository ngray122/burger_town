import React, { useContext } from "react";
import { Pagination, PaginationLink, PaginationItem } from "reactstrap";
import { ApiContext } from "../context/ApiContext";
const ItemPagination = ({ totalItems, paginate }) => {
  const pageNumbers = [];
  const { setCurrentPage, itemsPerPage, currentPage } = useContext(ApiContext);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
      <PaginationLink onClick={() => setCurrentPage(currentPage - 1)}>
        back
      </PaginationLink>
      {pageNumbers.map((number) => (
        <PaginationItem key={number}>
          <PaginationLink onClick={() => paginate(number)}>
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationLink onClick={() => setCurrentPage(currentPage + 1)}>
        next
      </PaginationLink>
    </Pagination>
  );
};

export default ItemPagination;
