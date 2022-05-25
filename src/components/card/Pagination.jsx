import React from "react";
import { Pagination } from "reactstrap";

const Pagination = ({ itemsPerPage, totalItems }) => {
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

export default Pagination;
