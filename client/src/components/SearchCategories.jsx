import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchCategories = () => {
  const [apiList, setApiList] = useState([]);

  useEffect(() => {
    axios
      // .get(`https://swapi.dev/api/${category}/${id}`)
      .get(`https://bobsburgers-api.herokuapp.com/episodes/`)
      .then((response) => {
        console.log("response =>", response);
        setApiList(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, []);
  return (
    <div>
      {apiList.map((item, i) => {
        return <h1>{item.name}</h1>;
      })}
    </div>
  );
};

export default SearchCategories;
