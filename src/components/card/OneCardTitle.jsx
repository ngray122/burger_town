import React from "react";
import { CardTitle } from "reactstrap";
import styles from "./OneCard.module.css";

const OneCardTitle = ({ name }) =>
  name ? <CardTitle className={styles.card_title}>{name}</CardTitle> : null;

export default OneCardTitle;
