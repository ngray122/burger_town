import React from "react";

const CardSubtitle = ({ season, episode, price }) =>
  episode ? (
    <h6>
      S{season} E{episode}
    </h6>
  ) : null || price ? (
    <h6>Price: {price}</h6>
  ) : null;

export default CardSubtitle;
