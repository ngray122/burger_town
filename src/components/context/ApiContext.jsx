import React, { useState, useEffect, useContext } from "react";
import OneCard from "../card/OneCard";
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
  //   console.log("values ", values);
  const [path, setPath] = useState("");
  useEffect(() => {
    const getResponse = () => {
      axios
        .get(`https://bobsburgers-api.herokuapp.com/`)
        .then((res) => {
          setAllHeaders(res.data);
        })
        .catch((err) => {
          console.log("error!! ====> ", err);
        });
    };
    getResponse();
  }, []);
  console.log("allHeaders in aContext", allHeaders);
  useEffect(() => {
    const getSingleResponse = () => {
      axios
        .get(`https://bobsburgers-api.herokuapp.com/${path}`)
        .then((res) => {
          setSingleHeader(res.data);
        })
        .catch((err) => {
          console.log("error!! ====> ", err);
        });
    };
    if (path) getSingleResponse();
  }, [path]);
  console.log("headers on Context", headers);
  console.log("singleHeader in aContext", singleHeader);
  const getColumnsForRow = () => {
    // console.log("qury in category", query);
    let items = allHeaders.map(
      ({ id, image, name, episode, season, price }) => {
        return (
          <>
            <Col key={id}>
              <OneCard>
                <CardBody>
                  <CardImg image={image} />
                  <CardTitle name={name} />
                  <CardSubtitle season={season} episode={episode} />
                  <CardSubtitle price={price} />
                </CardBody>
              </OneCard>
            </Col>
          </>
        );
      }
    );

    return items.slice(indexOfFirstPost, indexOfLastPost);
  };
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  return (
    <ApiContext.Provider
      value={{
        setPath,
        setCurrentPage,
        setAllHeaders,
        setSingleHeader,
        singleHeader,
        allHeaders,
        getColumnsForRow,
        itemsPerPage,
        currentPage,
        headers,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
