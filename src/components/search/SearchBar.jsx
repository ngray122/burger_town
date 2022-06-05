import React, { useState, useContext } from "react";
import { Input, Form, Button } from "reactstrap";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import OneCard from "../card/OneCard";
import { ApiContext } from "../../App";

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
  const [searchEndpoint, setSearchEndpoint] = useState("");
  // console.log("all headers in searchBar", allHeaders);
  let name = singleHeader.map(({ name }) => {
    // console.log("name", name);
    return name;
  });
  // useEffect(() => {
  //   axios
  //     .get(`https://bobsburgers-api.herokuapp.com/${header}`)
  //     .then((res) => {
  //       setSearchEndpoint(res.data);
  //     })
  //     .catch((err) => {
  //       console.log("error!! ====> ", err);
  //     });
  // }, [searchInput, header]);

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
    // navigate("/search");
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Input
          placeholder={`Search ${singleHeader}...`}
          type="text"
          onChange={(e) => handleSearch(e)}
          value={searchInput}
        ></Input>
        <Button type="submit">Submit</Button>
      </Form>
      <OneCard>{queryResult}</OneCard>
    </div>
  );
};

export default SearchBar;
