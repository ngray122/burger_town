import React from "react";
// import CardImg from "reactstrap";

const CardImg = (props) =>
  props.image ? (
    <img alt="category image" src={props.image} width="100%" top></img>
  ) : null;

export default CardImg;
