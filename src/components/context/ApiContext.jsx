import React, { useState, useEffect } from "react";
import OneCard from "../card/OneCard";
import axios from "axios";
import CardImg from "../card/CardImg";
import CardTitle from "../card/CardTitle";
import CardSubtitle from "../card/CardSubtitle";
import { Col, CardBody } from "reactstrap";
export const ApiContext = React.createContext();

export default function ApiProvider({ children }) {
  const [singleHeader, setSingleHeader] = useState([]);
  const [allHeaders, setAllHeaders] = useState([]);
  const headers = Object.values(allHeaders);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  useEffect(() => {
    const getResponse = () => {
      axios
        .get(`https://bobsburgers-api.herokuapp.com/`)
        .then((res) => {
          setAllHeaders(res.data);
          console.log("allHeaders in aContext", allHeaders);
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
        .get(`https://bobsburgers-api.herokuapp.com/${singleHeader}`)
        .then((res) => {
          setSingleHeader(res.data);
          console.log("singleHeader in aContext", singleHeader);
        })
        .catch((err) => {
          console.log("error!! ====> ", err);
        });
    };
    if (singleHeader) getSingleResponse();
  }, [singleHeader]);

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
  {
    console.log("singleHeader in context", singleHeader);
  }
  return (
    <ApiContext.Provider
      value={{
        setCurrentPage,
        setAllHeaders,
        setSingleHeader,
        singleHeader,
        allHeaders,
        getColumnsForRow,
        itemsPerPage,
        currentPage,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
