import React from "react";
import { PaginationLink, PaginationItem } from "reactstrap";

const Pagination = ({ itemsPerPage, totalItems }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <PaginationItem className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <PaginationLink href="!#">{number}</PaginationLink>
          </li>
        ))}
      </PaginationItem>
    </nav>
  );
};

export default Pagination;
