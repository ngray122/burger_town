import React from "react";
import { CardText } from "reactstrap";

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
      Season {season}, Episode {episode}
    </CardText>
  ) : null || price ? (
    <CardText>Price: {price}</CardText>
  ) : null || age ? (
    <CardText>Age: {age}</CardText>
  ) : null || gender ? (
    <CardText>Gender: {gender}</CardText>
  ) : null || hairColor ? (
    <CardText>Hair Color: {hairColor}</CardText>
  ) : null || occupation ? (
    <CardText>Occupation: {occupation}</CardText>
  ) : null || voicedBy ? (
    <CardText>Voiced By: {voicedBy}</CardText>
  ) : null || wikiUrl ? (
    <CardText>Wiki Url: {wikiUrl}</CardText>
  ) : null || firstEpisode ? (
    <CardText>First Episode: {firstEpisode}</CardText>
  ) : null || relatives ? (
    relatives.map((relative, id) => (
      <CardText key={id}> Relative: {relative.name}</CardText>
    ))
  ) : null || airDate ? (
    <CardText>Air Date: {airDate}</CardText>
  ) : null || totalViewers ? (
    <CardText>Total Viewers: {totalViewers}</CardText>
  ) : null;

export default OneCardText;
