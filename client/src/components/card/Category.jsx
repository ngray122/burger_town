import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Category = () => {
  const [categoryList, setCategoryList] = useState({});
  const headers = Object.values(categoryList);
  const { id, header } = useParams();

  useEffect(() => {
    axios
      // characters will be dynamic
      .get(`https://bobsburgers-api.herokuapp.com/${header}/`)
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, [categoryList]);
  return (
    <div>
      {/* <h1>Character</h1> */}
      <h1>{header}</h1>
      {console.log("--->", header)}
      {console.log(typeof headers)}
      <div>
        {headers.map((header, i) => (
          <>
            <h1 key={i}>{header.id}</h1>
            <h1>{header.name}</h1>
          </>
        ))}
      </div>
    </div>
  );
};

export default Category;
