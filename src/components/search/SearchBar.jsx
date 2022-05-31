import React, { useState, useEffect } from "react";
import { Input, Form, Button } from "reactstrap";
import axios from "axios";
import { useParams } from "react-router";
import OneCard from "../card/OneCard";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [searchEndpoint, setSearchEndpoint] = useState("");

  const { header } = useParams();

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
      })
    )
      // Response is Capitalized. "Linda Belcher" will not match "linda belcher"
      //  query.charAt(0).toUpperCase() + query.slice(1);
      return <OneCard></OneCard>;
  };
  console.log("query -> ", query);

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
      <OneCard>{query}</OneCard>
    </div>
  );
};

export default SearchBar;
