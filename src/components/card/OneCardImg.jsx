import React from "react";
import { CardImg } from "reactstrap";
import styles from "./OneCard.module.css";

const OneCardImg = ({ image }) =>
  image ? (
    <div className={styles.card_img}>
      <CardImg alt="character" src={image} width="100%" top></CardImg>
    </div>
  ) : null;

export default OneCardImg;
