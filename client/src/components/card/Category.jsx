import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [categoryList, setCategoryList] = useState({});
  const headers = Object.keys(categoryList);

  useEffect(() => {
    axios
      // characters will be dynamic
      .get(`https://bobsburgers-api.herokuapp.com/characters/`)
      .then((response) => {
        setCategoryList(Object.values(response.data));
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, [setCategoryList]);
  return (
    <div>
      <h1>Character</h1>
      {categoryList.map((header, i) => {
        <h1 key={i}>{header}</h1>;
        console.log(header.name);
      })}
    </div>
  );
};

export default Category;
