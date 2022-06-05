import React, { useContext } from "react";
import { Row, Container } from "reactstrap";
import ItemPagination from "./ItemPagination";
import SearchBar from "../search/SearchBar";
import { ApiContext } from "../context/ApiContext";

const Category = ({ query }) => {
  const columnsPerRow = 4;
  const {
    setCurrentPage,
    singleHeader,
    allHeaders,
    getColumnsForRow,
    itemsPerPage,
    currentPage,
  } = useContext(ApiContext);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log("actegory list in category", allHeaders);
  console.log("header in category", singleHeader);
  console.log("headers in category", allHeaders);
  return (
    <>
      <Container>
        <h1>{singleHeader}</h1>
        <SearchBar allHeaders={allHeaders} />

        <Row xs={1} md={columnsPerRow}>
          {getColumnsForRow}
        </Row>
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
