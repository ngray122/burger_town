import React, { useState, useEffect } from "react";
import OneCard from "../card/OneCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardImg from "../card/CardImg";
import CardTitle from "../card/CardTitle";
import CardSubtitle from "../card/CardSubtitle";
import { Col, CardBody } from "reactstrap";
import { useContext } from "react";
export const ApiContext = React.createContext();

// export const useApiContext = () => useContext(ApiContext);
export default function ApiProvider({ children }) {
  const { header, setHeader } = useState("ApiContext");
  const [categoryList, setCategoryList] = useState({});
  const headers = Object.values(categoryList);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  useEffect(() => {
    axios
      .get(`https://bobsburgers-api.herokuapp.com/${header}/`)
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.log("error!! ====> ", err);
      });
  }, [header]);

  const getColumnsForRow = () => {
    // console.log("qury in category", query);
    let items = headers.map(({ id, image, name, episode, season, price }) => {
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
    });

    return items.slice(indexOfFirstPost, indexOfLastPost);
  };
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  {
    console.log("header in context", header);
  }
  return (
    <ApiContext.Provider
      value={{
        setCurrentPage,
        header,
        headers,
        getColumnsForRow,
        itemsPerPage,
        categoryList,
        currentPage,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}
