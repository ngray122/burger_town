import React from "react";

const CardSubtitle = ({
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
}) =>
  episode ? (
    <h6>
      S{season} E{episode}
    </h6>
  ) : null || price ? (
    <h6>Price: {price}</h6>
  ) : null || age ? (
    <h6>Age: {age}</h6>
  ) : null || gender ? (
    <h6>Gender: {gender}</h6>
  ) : null || hairColor ? (
    <h6>Hair Color: {hairColor}</h6>
  ) : null || occupation ? (
    <h6>Occupation: {occupation}</h6>
  ) : null || voicedBy ? (
    <h6>Voiced By: {voicedBy}</h6>
  ) : null || wikiUrl ? (
    <h6>Wiki Url: {wikiUrl}</h6>
  ) : null || firstEpisode ? (
    <h6>First Episode: {firstEpisode}</h6>
  ) : null || relatives ? (
    relatives.map((relative, id) => (
      <h6 key={id}> Relative: {relative.name}</h6>
    ))
  ) : null;

export default CardSubtitle;
