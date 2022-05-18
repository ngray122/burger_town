import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [categoryList, setCategoryList] = useState({});
  const headers = Object.values(categoryList);

  useEffect(() => {
    axios
      // characters will be dynamic
      .get(`https://bobsburgers-api.herokuapp.com/characters/`)
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, [setCategoryList]);
  return (
    <div>
      <h1>Character</h1>
      <div>
        {headers.map((header, i) => (
          <h1 key={i}>{header.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default Category;
