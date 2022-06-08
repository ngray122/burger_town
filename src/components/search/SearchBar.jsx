import React, { useState, useContext } from "react";
import { Input, Form, Button } from "reactstrap";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import OneCard from "../card/OneCard";
import { ApiContext } from "../../App";
import CardImg from "../card/CardImg";
import CardTitle from "../card/CardTitle";
import CardSubtitle from "../card/CardSubtitle";
import { Col, CardBody } from "reactstrap";

const SearchBar = ({ headers }) => {
  const {
    setCurrentPage,
    singleHeader,
    allHeaders,
    getColumnsForRow,
    itemsPerPage,
    currentPage,
  } = useContext(ApiContext);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState("");
  let name = singleHeader.map(({ name }) => {
    // console.log("name in search", name);
    return name;
  });

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    if (
      searchInput.length > 0 &&
      singleHeader.filter((item) => {
        if (item.name.match(searchInput)) {
          setQuery(item.name);
        }
        console.log("query", query);
        return query;
      })
    )
      // Response is Capitalized. "Linda Belcher" will not match "linda belcher"
      return;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    name.find((item) => {
      if (item.includes(query)) {
        console.log("item in submit", item);
        return setQueryResult(item);
      }
    });

    setSearchInput("");
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
      {console.log("name", name)}
      {console.log("queryResult", queryResult)}
      {console.log("singleHeader", singleHeader)}
      {queryResult === name ? (
        singleHeader.map(({ id, image, name, episode, season, price }) => {
          <OneCard>
            <CardBody>
              <CardImg image={image} />
              <CardTitle name={name} />
              <CardSubtitle season={season} episode={episode} />
              <CardSubtitle price={price} />
            </CardBody>
          </OneCard>;
        })
      ) : (
        <OneCard>
          <h1>not found</h1>
        </OneCard>
      )}
    </div>
  );
};

export default SearchBar;
