import React, { useState, useContext } from "react";
import { Input, Form, Button } from "reactstrap";
import OneCard from "../card/OneCard";
import { ApiContext } from "../../App";
import CardImg from "../card/CardImg";
import CardTitle from "../card/CardTitle";
import CardSubtitle from "../card/CardSubtitle";
import { Row, Col, CardBody } from "reactstrap";

const SearchBar = () => {
  const {
    singleHeader,
    columnsPerRow,
    itemsPerPage,
    currentPage,
    toggleModal,
  } = useContext(ApiContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    return searchInput;
  };

  const getQueryMatch = () => {
    let items = singleHeader
      .filter((item) => {
        if (
          item.hasOwnProperty("name") &&
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        ) {
          return item;
        }
      })
      .map((item, index) => {
        return (
          <Col onClick={toggleModal}>
            <OneCard key={index}>
              <CardBody>
                <CardImg image={item.image} />
                <CardTitle name={item.name} />
                <CardSubtitle season={item.season} episode={item.episode} />
                <CardSubtitle price={item.price} />
              </CardBody>
            </OneCard>
          </Col>
        );
      });

    return items.slice(indexOfFirstPost, indexOfLastPost);
  };
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchInput("");

    return;
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Input
          placeholder={`Search ...`}
          type="text"
          onChange={(e) => handleSearch(e)}
          value={searchInput}
        ></Input>
        <Button type="submit">Clear Search</Button>
      </Form>

      <Row xs={1} md={columnsPerRow}>
        {getQueryMatch()}
      </Row>
    </div>
  );
};

export default SearchBar;
