import React, { useState, useEffect } from "react";
import { Input } from "reactstrap";
import axios from "axios";
import { useParams } from "react-router";

const SearchCategories = ({ headers }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchEndpoint, setSearchEndpoint] = useState([]);
  const { header, endpointKey } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://bobsburgers-api.herokuapp.com/${header}?name=${searchInput}`
      )
      .then((response) => {
        setSearchEndpoint(response.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, [header]);

  console.log("header -> ", header);
  console.log("searchEndpoint -> ", searchEndpoint);

  //   if (searchInput.length > 0) {
  //     headers.filter((header) => {
  //       return header.match(searchInput);
  //     });
  //   }
  return (
    <div>
      <Input
        placeholder="Search..."
        type="text"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        value={searchInput}
      ></Input>
      {console.log("searchInput", searchInput)}
    </div>
  );
};

export default SearchCategories;
