import React, { useContext, useEffect } from "react";
import { Container } from "reactstrap";
import ItemPagination from "./ItemPagination";
import SearchBar from "../search/SearchBar";
import { ApiContext } from "../../App";
import ResultModal from "../modal/ResultModal";

const Category = () => {
  const {
    setCurrentPage,
    allHeaders,
    itemsPerPage,
    currentPage,
    headers,
    setPath,
    path,
    openModal,
    setOpenModal,
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
        {openModal && <ResultModal />}
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
