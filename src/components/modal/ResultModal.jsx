import React from "react";
import { Modal } from "reactstrap";
import { ApiContext } from "../../App";
import OneCard from "../card/OneCard";

const ResultModal = () => {
  const { singleheader } = useContext(ApiContext);
  console.log("singleheader in ResultModal", singleheader);
  return (
    <Modal>
      <OneCard>From Modal</OneCard>
    </Modal>
  );
};

export default ResultModal;
