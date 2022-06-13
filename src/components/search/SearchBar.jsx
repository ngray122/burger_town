import React, { useState, useContext, useEffect } from "react";
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

const SearchBar = () => {
  const { headers, singleHeader, name } = useContext(ApiContext);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState("");
  const [path, setPath] = useState("");

  // useEffect(() => {
  //   headers.map((header) => {
  //     setPath(header);
  //     // console.log(header);
  //   });
  // }, [path]);
  // console.log("path in search", path);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    return searchInput;
  };
  console.log("search input in SearchBar", searchInput);

  // console.log("singleHeader in SearchBar", singleHeader);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    // if (
    //   searchInput.length > 0 &&
    //   singleHeader.filter((item) => {
    //     setQuery(item.name);
    //     console.log("query in searchbar", query);
    //   })
    // )
    // if (item.name.match(searchInput)) {
    //   setQuery(item.name);
    // }

    // )
    // name.find((item) => {
    //   if (item.includes(query)) {
    //
    //     return setQueryResult();
    //   }
    // });
    // console.log("queryResult", queryResult);
    // getSingleResponse();
    // setSearchInput("");
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
      {/* {console.log("name", name)}
      {console.log("queryResult", queryResult)}
      {console.log("singleHeader", singleHeader)} */}
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
