import React from "react";
import { Card } from "reactstrap";

const OneCard = (props) => (
  <div>
    <Card>{props.children}</Card>
  </div>
);
export default OneCard;
