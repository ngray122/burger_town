import React, { useState, useContext, useEffect } from "react";
import { Input, Form, Button } from "reactstrap";
import OneCard from "../card/OneCard";
import { ApiContext } from "../../App";
import OneCardImg from "../card/OneCardImg";
import OneCardTitle from "../card/OneCardTitle";
import OneCardSubtitle from "../card/OneCardSubtitle";
import ResultModal from "../modal/ResultModal";
import { Row, Col, CardBody } from "reactstrap";
import styles from "./SearchBar.module.css";
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

  const renderQueryMatch = () => {
    return allItems.map((item) => {
      return (
        <Col key={item.id} onClick={() => handleToggle(item)}>
          <OneCard key={item.id}>
            <CardBody>
              <OneCardImg image={item.image} />
              <OneCardTitle name={item.name} />
              <OneCardSubtitle season={item.season} episode={item.episode} />
              <OneCardSubtitle price={item.price} />
            </CardBody>
          </OneCard>
        </Col>
      );
    });
  };

  const handleToggle = useCallback(
    (item) => {
      toggle();
      setActiveItem(item);
    },
    [toggle, setActiveItem]
  );
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;

  useEffect(() => {
    let items = singleHeader.filter((item) => {
      if (
        item.hasOwnProperty("name") &&
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return item;
      }
    });
    return setAllItems(items.slice(indexOfFirstPost, indexOfLastPost));
  }, [singleHeader, searchInput, indexOfFirstPost, indexOfLastPost]);

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchInput("");

    return;
  };
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Input
          placeholder={`Search ...`}
          type="text"
          onChange={(e) => handleSearch(e)}
          value={searchInput}
          className={styles.search_bar}
        ></Input>
        <Button type="submit" className={styles.search_button}>
          Clear Search
        </Button>
      </Form>

      <Row xs={2} md={columnsPerRow}>
        {renderQueryMatch()}
      </Row>
      {openModal && <ResultModal onClick={handleToggle} item={activeItem} />}
    </div>
  );
};

export default SearchBar;
