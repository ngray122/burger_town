import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);

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
  }, []);
  // console.log("Category List -> ", categoryList);
  return (
    <div>
      <h1>Character</h1>
      {/* {categoryList.map(item,i)=>{
        return   <h1></h1>
      
      }} */}
    </div>
  );
};

export default Category;
