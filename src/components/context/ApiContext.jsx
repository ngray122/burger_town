import React, { useState, useEffect } from "react";
import axios from "axios";

import { ApiContext } from "../../App";

export default function ApiProvider({ children }) {
  const [singleHeader, setSingleHeader] = useState([]);
  const [allHeaders, setAllHeaders] = useState([]);
  const headers = Object.keys(allHeaders);
  const values = Object.values(allHeaders);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [path, setPath] = useState("");
  useEffect(() => {
    const getResponse = () => {
      axios
        .get(`https://bobsburgers-api.herokuapp.com/`)
        .then((res) => {
          setAllHeaders(res.data);
          //   console.log("allHeaders", allHeaders);
        })
        .catch((err) => {
          console.log("error!! ====> ", err);
        });
    };
    getResponse();
  }, []);

  useEffect(() => {
    const getSingleResponse = () => {
      axios
        .get(`https://bobsburgers-api.herokuapp.com/${path}`)
        .then((res) => {
          setSingleHeader(res.data);
          // console.log("single header in api call", singleHeader);
        })
        .catch((err) => {
          console.log("error!! ====> ", err);
        });
    };
    if (path) getSingleResponse();
  }, [path]);

  let name = singleHeader.map(({ name }) => {
    return name;
  });
  //   console.log("name in context", name);
  return (
    <ApiContext.Provider
      value={{
        setPath,
        setCurrentPage,
        setAllHeaders,
        setSingleHeader,
        singleHeader,
        allHeaders,
        itemsPerPage,
        currentPage,
        headers,
        name,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
