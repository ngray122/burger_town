import React, { useContext } from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./OneCard.module.css";
import { ApiContext } from "../../App";

const OneCard = ({ children }) => {
  const { openModal } = useContext(ApiContext);

  return (
    <Card
      className={openModal ? styles.modal_card : `shadow ${styles.single_card}`}
    >
      <CardBody>{children}</CardBody>
    </Card>
  );
};
export default OneCard;
