import React from "react";

const CardImg = ({ image }) =>
  image ? (
    <img alt="category image" src={image} width="100%" top="true"></img>
  ) : null;

export default CardImg;
