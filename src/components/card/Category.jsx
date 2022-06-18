import React, { useContext, useEffect } from "react";
import { Container } from "reactstrap";
import ItemPagination from "./ItemPagination";
import SearchBar from "../search/SearchBar";
import { ApiContext } from "../../App";

const Category = () => {
  // you're passing a lot of these as props to ItemPagination,
  // but you're also using the ApiContext there ...
  // there's no need to pass them as props since
  // you already have access to them in ItemPagination
  const {
    setCurrentPage,
    allHeaders,
    itemsPerPage,
    currentPage,
    headers,
    setPath,
    path,
  } = useContext(ApiContext);
  // same with this function, you can define this in ItemPagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {
    // if you aren't returning something in a .map
    // then use forEach
    // .map is for creating new arrays
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
