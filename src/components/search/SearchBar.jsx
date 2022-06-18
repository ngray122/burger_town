import React, { useState, useContext } from "react";
import { Input, Form, Button } from "reactstrap";
import OneCard from "../card/OneCard";
import { ApiContext } from "../../App";
import CardImg from "../card/CardImg";
import CardTitle from "../card/CardTitle";
import CardSubtitle from "../card/CardSubtitle";
import ResultModal from "../modal/ResultModal";
import { Row, Col, CardBody } from "reactstrap";
import { useCallback } from "react";

const SearchBar = () => {
  const {
    singleHeader,
    columnsPerRow,
    itemsPerPage,
    currentPage,
    openModal,
    toggle,
  } = useContext(ApiContext);
  const [searchInput, setSearchInput] = useState("");
  const [activeItem, setActiveItem] = useState();
  const [allItems, setAllItems] = useState([]);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    return searchInput;
  };

  // move .map logic in getQueryMatch, and use
  // allItems
  const renderQueryMatch = () => {};

  const handleToggle = useCallback(
    (item) => {
      toggle();
      setActiveItem(item);
    },
    [toggle, setActiveItem]
  );

  const getQueryMatch = () => {
    let items = singleHeader
      .filter((item) => {
        if (
          item.hasOwnProperty("name") &&
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        ) {
          return item;
        }
      })
      .map((item) => {
        return (
          <Col key={item.id} onClick={() => handleToggle(item)}>
            <OneCard>
              <CardBody>
                <CardImg image={item.image} />
                <CardTitle name={item.name} />
                <CardSubtitle season={item.season} episode={item.episode} />
                <CardSubtitle price={item.price} />
              </CardBody>
            </OneCard>
            {openModal && <ResultModal onClick={toggle} item={item} />}
          </Col>
        );
      });

    // these items need to live in local state
    // setAllItems(items.slice(indexOfFirstPost, indexOfLastPost))
    return items.slice(indexOfFirstPost, indexOfLastPost);
  };
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchInput("");

    return;
  };
  return (
    <>
      <div>
        <Form onSubmit={submitHandler}>
          <Input
            placeholder={`Search ...`}
            type="text"
            onChange={(e) => handleSearch(e)}
            value={searchInput}
          ></Input>
          <Button type="submit">Clear Search</Button>
        </Form>

        <Row xs={1} md={columnsPerRow}>
          {getQueryMatch()}
        </Row>
      </div>
      {/* you only ever want one modal rendered at a time
    {openModal && <ResultModal onClick={toggle} item={activeItem} />} */}
    </>
  );
};

export default SearchBar;
