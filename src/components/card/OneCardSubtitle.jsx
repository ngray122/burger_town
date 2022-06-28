import React from "react";
import CardText, { CardSubtitle } from "reactstrap";
import styles from "./OneCard.module.css";

const OneCardSubtitle = ({ firstEpisode }) =>
  firstEpisode ? (
    <CardSubtitle className={styles.card_subtitle} tag="h6">
      First Episode: {firstEpisode}
    </CardSubtitle>
  ) : null;
export default OneCardSubtitle;
