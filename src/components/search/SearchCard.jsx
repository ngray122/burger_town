import React from "react";
import OneCard from "../card/OneCard";
const SearchCard = ({ headers }) => {
  console.log(headers);

  // console.log(typeof searchEndpoint);

  return (
    <div>
      <h1>Search Result</h1>
      {/* {" "}
      {searchEndpoint.map((item) => (
        <OneCard>{item}</OneCard>
      ))} */}
    </div>
  );
};
export default SearchCard;
