import React, { useState, useEffect } from "react";
import { Input, Form, Button } from "reactstrap";
import axios from "axios";
import { useParams } from "react-router";
import SearchCard from "./SearchCard";

const SearchBar = ({ headers, getQuery }) => {
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("");
  const [searchEndpoint, setSearchEndpoint] = useState("");
  const { header } = useParams();

  useEffect(() => {
    axios
      .get(`https://bobsburgers-api.herokuapp.com/${header}`)
      .then((response) => {
        setSearchEndpoint(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, [searchInput]);
  const onSubmitHandler = (e) => {
    // e.preventDefault();
    console.log("inSubmitHandler");
    if (searchInput.length > 0) {
      searchEndpoint.filter((item) => {
        return item.name.match(searchInput);
      });
    }
  }; //   console.log("header -> ", header);
  //   console.log("headers -> ", headers);
  console.log("searchEndpoint -> ", searchEndpoint);
  console.log("searchInput -> ", searchInput);
  let result;

  {
    console.log("returned result from  ", result);
  }
  return (
    <div>
      <Form onSubmit={onSubmitHandler()}>
        <Input
          placeholder={`Search ${header}...`}
          type="text"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
        ></Input>
        <Button type="submit">Submit</Button>
      </Form>
      {/* {console.log("searchInput", searchInput)} */}
    </div>
  );
};

export default SearchBar;
