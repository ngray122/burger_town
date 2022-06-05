import React, { useContext } from "react";
import { Row, Container } from "reactstrap";
import ItemPagination from "./ItemPagination";
import SearchBar from "../search/SearchBar";
import { ApiContext } from "../../App";

const Category = ({ query }) => {
  const columnsPerRow = 4;
  const {
    setCurrentPage,
    singleHeader,
    allHeaders,
    getColumnsForRow,
    itemsPerPage,
    currentPage,
    headers,
    setPath,
  } = useContext(ApiContext);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log("headers list in category", headers);
  // console.log("header in category", singleHeader);
  // console.log("headers in category", allHeaders);
  return (
    <>
      <Container>
        {headers.map((header, i) => {
          return <h1>{header}</h1>;
        })}
        <h1>{singleHeader}</h1>
        <SearchBar />

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
