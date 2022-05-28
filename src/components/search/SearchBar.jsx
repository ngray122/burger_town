import React, { useState, useEffect } from "react";
import { Input, Form } from "reactstrap";
import axios from "axios";
import { useParams } from "react-router";

const SearchBar = ({ headers }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchEndpoint, setSearchEndpoint] = useState({});
  const { header } = useParams();

  useEffect(() => {
    axios
      .get(`https://bobsburgers-api.herokuapp.com/${header}`)
      .then((response) => {
        setSearchEndpoint(response.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, [header]);

  //   console.log("header -> ", header);
  //   console.log("headers -> ", headers);
  // console.log("searchEndpoint -> ", searchEndpoint);

  //   if (searchInput.length > 0) {
  //     headers.filter((item) => {
  //       return item.name.match(searchInput);
  //     });
  //   }
  return (
    <div>
      <Form>
        <Input
          placeholder={`Search ${header}...`}
          type="text"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          value={searchInput}
        ></Input>
      </Form>
      {/* {console.log("searchInput", searchInput)} */}
    </div>
  );
};

export default SearchBar;
