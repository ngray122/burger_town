import React from "react";
import SearchBar from "./SearchBar";
const SearchCard = ({ query }) => {
  console.log("query in SeachCardd -> ", query);
  console.log("  typeof query  -> ", typeof query);
  return (
    <div>
      <h1>SearchCard</h1>
    </div>
  );
};
export default SearchCard;
