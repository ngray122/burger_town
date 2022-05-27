import React, { useState } from "react";
import { Input } from "reactstrap";

const SearchCategories = ({ rootEndpoint, headers }) => {
  const [searchInput, setSearchInput] = useState("");

  if (searchInput.length > 0) {
    headers.filter((header) => {
      return header.match(searchInput);
    });
  }
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
      {console.log("headers", headers)}
      {console.log("rootEndpoint", rootEndpoint)}
      {console.log("searchInput", searchInput)}
    </div>
  );
};

export default SearchCategories;
