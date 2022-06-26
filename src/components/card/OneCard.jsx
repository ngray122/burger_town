import React from "react";
import { Card, CardBody } from "reactstrap";
import styles from "./OneCard.module.css";
const OneCard = ({ children }) => (
  <Card>
    <CardBody>{children}</CardBody>
  </Card>
);
export default OneCard;
