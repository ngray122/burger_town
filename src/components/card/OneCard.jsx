import React from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./OneCard.module.css";
const OneCard = ({ children }) => (
  <Card className={`shadow ${styles.single_card}`}>
    <CardBody>{children}</CardBody>
  </Card>
);
export default OneCard;
