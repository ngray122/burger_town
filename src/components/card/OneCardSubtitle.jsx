import React from "react";
import CardText, { CardSubtitle } from "reactstrap";

const OneCardSubtitle = ({ firstEpisode }) =>
  firstEpisode ? (
    <CardSubtitle tag="h6">First Episode: {firstEpisode}</CardSubtitle>
  ) : null;
export default OneCardSubtitle;
