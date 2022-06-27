import React from "react";
import { CardTitle } from "reactstrap";

const OneCardTitle = ({ name }) =>
  name ? <CardTitle tag="h5">{name}</CardTitle> : null;

export default OneCardTitle;
