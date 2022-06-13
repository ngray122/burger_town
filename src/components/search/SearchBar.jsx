import React, { useState, useContext } from "react";
import { Input, Form, Button } from "reactstrap";
import OneCard from "../card/OneCard";
import { ApiContext } from "../../App";
import CardImg from "../card/CardImg";
import CardTitle from "../card/CardTitle";
import CardSubtitle from "../card/CardSubtitle";
import { Row, CardBody } from "reactstrap";

const SearchBar = () => {
  const { singleHeader, columnsPerRow } = useContext(ApiContext);
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    return searchInput;
  };

  const getQueryMatch = () => {};

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      searchInput.length > 0 &&
      singleHeader
        .filter((item) => {
          if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
            console.log("item in submithanler", item);
            return item;
          }
        })
        .map((item, index) => {
          return (
            <OneCard key={index}>
              <CardBody>
                <CardImg image={item.image} />
                <CardTitle name={item.name} />
                <CardSubtitle season={item.season} episode={item.episode} />
                <CardSubtitle price={item.price} />
              </CardBody>
            </OneCard>
          );
        })
    )
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
        <Button type="submit">Submit</Button>
      </Form>

      <Row xs={1} md={columnsPerRow}></Row>
    </div>
  );
};

export default SearchBar;
