import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const Dropdown = () => {
  const [categoryList, setCategoryList] = useState({});
  const { category } = useParams();
  // const { headers, values } = categoryList;
  const headers = Object.keys(categoryList);
  const values = Object.values(categoryList);
  useEffect(() => {
    axios
      .get(`https://bobsburgers-api.herokuapp.com/`)
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, []);

  return <div>{}</div>;
};
export default Dropdown;
