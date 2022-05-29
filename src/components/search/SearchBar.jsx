import React, { useState, useEffect } from "react";
import { Input, Form, Button } from "reactstrap";
import axios from "axios";
import { useParams } from "react-router";
import { Navigate } from "react-router-dom";
import SearchCard from "./SearchCard";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState([]);
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
        // console.log("item.name ", item.name);
        if (item.name.match(searchInput)) {
          setQuery(item.name);
        }
      })
    )
      // Respose is Capitalize. Linda Belcher will not match linda belcher
      // return query.charAt(0).toUpperCase() + query.slice(1);
      return query;
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
    </div>
  );
};

export default SearchBar;
