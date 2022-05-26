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
    <ul>
      {pageNumbers.map((number) => (
        <li key={number}>
          <a href="!#">{number}</a>
        </li>
      ))}
    </ul>
  );
};

export default ItemPagination;