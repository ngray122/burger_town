import React, { useContext } from "react";
import { Pagination, PaginationLink, PaginationItem } from "reactstrap";
import { ApiContext } from "../../App";
import styles from "./ItemPagination.module.css";

const ItemPagination = ({ totalItems, paginate }) => {
  const pageNumbers = [];
  const { setCurrentPage, itemsPerPage, currentPage } = useContext(ApiContext);
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Pagination size="lg">
      <PaginationLink
        className={styles.pagination_link}
        first
        onClick={() => setCurrentPage(currentPage - 1)}
      ></PaginationLink>

      <PaginationLink
        className={styles.pagination_link}
        last
        onClick={() => setCurrentPage(currentPage + 1)}
      ></PaginationLink>
    </Pagination>
  );
};

export default ItemPagination;
