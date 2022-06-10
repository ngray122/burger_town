import React, { useState, useEffect } from "react";
import axios from "axios";
import CardImg from "../card/CardImg";
import CardTitle from "../card/CardTitle";
import CardSubtitle from "../card/CardSubtitle";
import { Col, CardBody } from "reactstrap";

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
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
