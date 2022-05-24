import React from "react";
// import CardImg from "reactstrap";

const CardImg = ({ image }) =>
  image ? <img alt="category image" src={image} width="100%" top></img> : null;

export default CardImg;
