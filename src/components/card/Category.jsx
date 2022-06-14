import React, { useContext, useEffect } from "react";
import { Row, Container } from "reactstrap";
import ItemPagination from "./ItemPagination";
import OneCard from "../card/OneCard";

import SearchBar from "../search/SearchBar";
import { ApiContext } from "../../App";
import CardImg from "../card/CardImg";
import CardTitle from "../card/CardTitle";
import CardSubtitle from "../card/CardSubtitle";
import { Col, CardBody } from "reactstrap";

const Category = () => {
  const {
    setCurrentPage,
    allHeaders,
    itemsPerPage,
    currentPage,
    headers,
    setPath,
    path,
  } = useContext(ApiContext);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    headers.map((header) => {
      setPath(header);
    });
  }, [path]);

  return (
    <>
      <Container>
        <SearchBar />

        <ItemPagination
          itemsPerPage={itemsPerPage}
          totalItems={allHeaders.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </>
  );
};

export default Category;
ItemPagination.defaultProps = {
  itemsPerPage: 20,
};
