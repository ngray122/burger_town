import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import {
  Row,
  Col,
  Container,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
} from "reactstrap";
import OneCard from "./OneCard";

const Category = () => {
  const [categoryList, setCategoryList] = useState({});
  const headers = Object.values(categoryList);
  const { header } = useParams();
  const columnsPerRow = 4;

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

  const getColumnsForRow = () => {
    let items = headers.map((header) => {
      return (
        <Col key={header.id}>
          <OneCard>
            <CardBody>
              {header.image ? (
                <CardImg
                  alt="category image"
                  src={header.image}
                  top
                  width="100%"
                />
              ) : (
                ""
              )}
              {header.name ? (
                <CardTitle tag="h4"> {header.name}</CardTitle>
              ) : (
                ""
              )}
              {/* && header.episode.length < 5 */}
              {header.episode ? (
                <CardSubtitle>
                  S{header.season} E{header.episode}
                </CardSubtitle>
              ) : (
                ""
              )}
              {header.price ? (
                <CardSubtitle>Price: {header.price}</CardSubtitle>
              ) : (
                ""
              )}
            </CardBody>
          </OneCard>
        </Col>
      );
    });
    return items;
  };
  return (
    <>
      <Container>
        {" "}
        <Row xs={1} md={columnsPerRow}>
          {getColumnsForRow()}
        </Row>
      </Container>
    </>
  );
};

export default Category;
