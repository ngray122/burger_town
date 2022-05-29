import React from "react";
import SearchBar from "./SearchBar";
const SearchCard = ({ query }) => {
  // console.log("headers in SearchCard ->", headers);

  // console.log(typeof searchEndpoint);
  console.log("query", query);
  return (
    <div>
      <h1>{query}</h1>
    </div>
  );
};
export default SearchCard;
