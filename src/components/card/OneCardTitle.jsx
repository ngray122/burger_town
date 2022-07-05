import React from "react";
import { CardTitle } from "reactstrap";
import styles from "./OneCard.module.css";

const OneCardTitle = ({ name }) =>
  name ? (
    <CardTitle>
      <h1 className={styles.card_title}>{name}</h1>
    </CardTitle>
  ) : null;

export default OneCardTitle;
