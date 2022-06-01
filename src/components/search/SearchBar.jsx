import React, { useState, useEffect } from "react";
import { Input, Form, Button } from "reactstrap";
import axios from "axios";
import { useParams } from "react-router";
import OneCard from "../card/OneCard";

const SearchBar = ({ headers, getColumnsForRow }) => {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [searchEndpoint, setSearchEndpoint] = useState("");

  const { header } = useParams();
  let name = headers.map(({ name }) => {
    console.log(name);
    return { name };
  });
  useEffect(() => {
    axios
      .get(`https://bobsburgers-api.herokuapp.com/${header}`)
      .then((res) => {
        setSearchEndpoint(res.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, [searchInput, header]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    if (
      searchInput.length > 0 &&
      searchEndpoint.filter((item) => {
        if (item.name.match(searchInput)) {
          setQuery(item.name);
        }
        return query;
      })
    )
      // Response is Capitalized. "Linda Belcher" will not match "linda belcher"
      //  query.charAt(
      return query === name ? (
        <OneCard>Card return {name}</OneCard>
      ) : (
        "no match found"
      );
  };

  //   let basketballPlayers = students.filter(function (student) {
  //     return student.sports === "Basketball";
  // }).map(function (student) {
  //     return student.name;
  // })

  // console.log("query -> ", query);

  return (
    <div>
      <Form>
        <Input
          placeholder={`Search ${header}...`}
          type="text"
          onChange={(e) => handleSearch(e)}
          value={searchInput}
        ></Input>
        <Button type="submit">Submit</Button>
      </Form>
      <h1>Query in Search Bar {query}</h1>
      {query === name ? <OneCard></OneCard> : "No Match Found"}
      {console.log("name in render", name)}
    </div>
  );
};

export default SearchBar;
