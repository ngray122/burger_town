import React, { useContext } from "react";
import { Row, Container } from "reactstrap";
import ItemPagination from "./ItemPagination";
import SearchBar from "../search/SearchBar";
import { ApiContext } from "../context/ApiContext";

const Category = ({ query }) => {
  const columnsPerRow = 4;
  const {
    setCurrentPage,
    header,
    headers,
    getColumnsForRow,
    itemsPerPage,
    allCategories,
    currentPage,
  } = useContext(ApiContext);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log("actegory list in category", allCategories);
  console.log("header in category", header);
  console.log("headers in category", headers);
  return (
    <>
      <Container>
        <h1>{header}</h1>
        <SearchBar headers={headers} />

        <Row xs={1} md={columnsPerRow}>
          {getColumnsForRow}
        </Row>
        <ItemPagination
          itemsPerPage={itemsPerPage}
          totalItems={allCategories.length}
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
