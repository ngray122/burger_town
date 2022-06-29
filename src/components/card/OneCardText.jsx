import React from "react";
import { CardText } from "reactstrap";
import styles from "./OneCard.module.css";

const OneCardText = ({
  season,
  episode,
  price,
  age,
  gender,
  hairColor,
  occupation,
  voicedBy,
  wikiUrl,
  firstEpisode,
  relatives,
  airDate,
  totalViewers,
}) =>
  episode ? (
    <CardText>
      <span className={styles.card_text}>Season {season},</span>{" "}
      <span className={styles.card_text}>Episode {episode}</span>
    </CardText>
  ) : null || price ? (
    <CardText>
      <span className={styles.card_text}>Price: </span>
      {price}
    </CardText>
  ) : null || age ? (
    <CardText>
      <span className={styles.card_text}>Age: </span>
      {age}
    </CardText>
  ) : null || gender ? (
    <CardText>
      <span className={styles.card_text}>Gender: </span>
      {gender}
    </CardText>
  ) : null || hairColor ? (
    <CardText>
      <span className={styles.card_text}>Hair Color: </span>
      {hairColor}
    </CardText>
  ) : null || occupation ? (
    <CardText>
      <span className={styles.card_text}>Occupation:</span> {occupation}
    </CardText>
  ) : null || voicedBy ? (
    <CardText>
      <span className={styles.card_text}>Voiced By:</span> {voicedBy}
    </CardText>
  ) : null || wikiUrl ? (
    <CardText>
      <span className={styles.card_text}>Wiki Url: </span>
      {wikiUrl}
    </CardText>
  ) : null || firstEpisode ? (
    <CardText>
      <span className={styles.card_text}>First Episode: </span>
      {firstEpisode}
    </CardText>
  ) : null || relatives ? (
    relatives.map((relative, id) => (
      <CardText key={id}>
        {" "}
        <span className={styles.card_text}>Relative: </span>
        {relative.name}
      </CardText>
    ))
  ) : null || airDate ? (
    <CardText>
      <span className={styles.card_text}>Air Date: </span>
      {airDate}
    </CardText>
  ) : null || totalViewers ? (
    <CardText>
      <span className={styles.card_text}>Total Viewers:</span> {totalViewers}
    </CardText>
  ) : null;

export default OneCardText;
