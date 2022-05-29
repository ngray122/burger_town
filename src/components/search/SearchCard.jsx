import React from "react";
import SearchBar from "./SearchBar";
const SearchCard = ({ query }) => {
  console.log("query in SeachCard -> ", query);
  console.log("  typeof query  -> ", typeof query);
  return (
    <div>
      <h1>{query}SearchCard</h1>
    </div>
  );
};
export default SearchCard;
