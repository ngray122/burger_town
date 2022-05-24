import React from "react";

const CardSubtitle = (props) =>
  props.episode ? (
    <h6>
      S{props.season} E{props.episode}
    </h6>
  ) : null || props.price ? (
    <h6>Price: {props.price}</h6>
  ) : null;

export default CardSubtitle;
