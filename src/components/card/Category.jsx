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
const columnsPerRow = 4;

const Category = ({ query }) => {
  const {
    setCurrentPage,
    allHeaders,
    itemsPerPage,
    currentPage,
    headers,
    setPath,
    path,
    singleHeader,
  } = useContext(ApiContext);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // console.log("allHeaders in cateogry", allHeaders);
  useEffect(() => {
    headers.map((header) => {
      setPath(header);
    });
  }, []);

  const getColumnsForRow = () => {
    let items = singleHeader.map(
      ({ id, image, name, episode, season, price }) => {
        return (
          <>
            <Col key={id}>
              <OneCard>
                <CardBody>
                  <CardImg image={image} />
                  <CardTitle name={name} />
                  <CardSubtitle season={season} episode={episode} />
                  <CardSubtitle price={price} />
                </CardBody>
              </OneCard>
            </Col>
          </>
        );
      }
    );

    return items.slice(indexOfFirstPost, indexOfLastPost);
  };
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  return (
    <>
      <Container>
        <SearchBar />

        <Row xs={1} md={columnsPerRow}>
          {getColumnsForRow()}
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
