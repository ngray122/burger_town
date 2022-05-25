import React from "react";
import { Pagination, PaginationLink, PaginationItem } from "reactstrap";

const ItemPagination = ({ itemsPerPage, totalItems }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <PaginationItem key={number}>
          <PaginationLink href="!#">{number}</PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};

export default ItemPagination;
