import React from "react";
import { CardImg } from "reactstrap";

const OneCardImg = ({ image }) =>
  image ? (
    <CardImg alt="character" src={image} width="100%" top></CardImg>
  ) : null;

export default OneCardImg;
