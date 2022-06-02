import React from "react";
import OneCard from "../card/OneCard";
import SearchBar from "./SearchBar";

const SearchCard = ({ queryResult }) => {
  console.log(queryResult);
  return (
    <div>
      <OneCard>{queryResult}</OneCard>
    </div>
  );
};
export default SearchCard;
