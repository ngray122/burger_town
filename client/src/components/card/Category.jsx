import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Category = () => {
  const [categoryList, setCategoryList] = useState({});
  const headers = Object.values(categoryList);
  const { header } = useParams();

  useEffect(() => {
    axios
      .get(`https://bobsburgers-api.herokuapp.com/${header}/`)
      .then((response) => {
        setCategoryList(response.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, [header]);
  return (
    <div>
      <h1>{header}</h1>

      <div>
        {headers.map((header, id) => (
          <>
            <h1 key={id}>
              {header.id} {header.name}
            </h1>
          </>
        ))}
      </div>
    </div>
  );
};

export default Category;
