import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Row, Col, Container, CardBody } from "reactstrap";
import OneCard from "./OneCard";
import CardImg from "./CardImg";
import CardTitle from "./CardTitle";
import CardSubtitle from "./CardSubtitle";
import ItemPagination from "./ItemPagination";
import SearchBar from "../search/SearchBar";
import SearchCard from "../search/SearchCard";

const Category = () => {
  const [categoryList, setCategoryList] = useState({});
  const headers = Object.values(categoryList);
  const { header } = useParams();
  const columnsPerRow = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [query, setQuery] = useState("");

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    axios
      .get(`https://bobsburgers-api.herokuapp.com/${header}/`)
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, [header]);
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  const getColumnsForRow = () => {
    let items = headers.map(({ id, image, name, episode, season, price }) => {
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
    });

    return items.slice(indexOfFirstPost, indexOfLastPost);
  };

  return (
    <>
      <Container>
        <h1>{header}</h1>
        <SearchBar header={header} />

        <SearchCard />

        <Row xs={1} md={columnsPerRow}>
          {getColumnsForRow()}
        </Row>
        <ItemPagination
          itemsPerPage={itemsPerPage}
          totalItems={categoryList.length}
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
