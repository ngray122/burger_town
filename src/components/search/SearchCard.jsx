import React from "react";
import OneCard from "../card/OneCard";
const SearchCard = ({ headers }) => {
  // console.log("headers in SearchCard ->", headers);

  // console.log(typeof searchEndpoint);

  return (
    <div>
      <h1>Search Result</h1>{" "}
      {headers.map((header, id) => (
        <OneCard key={id}>{header.name}</OneCard>
      ))}
    </div>
  );
};
export default SearchCard;
