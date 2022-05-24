import React from "react";
import { Card } from "reactstrap";

const OneCard = (props) => {
  return (
    <div>
      <Card>{props.children}</Card>
    </div>
  );
};
export default OneCard;
