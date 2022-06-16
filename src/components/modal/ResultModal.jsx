import React, { useContext } from "react";
import { Modal } from "reactstrap";
import { ApiContext } from "../../App";
import OneCard from "../card/OneCard";

const ResultModal = () => {
  const { singleheader } = useContext(ApiContext);
  console.log("singleheader in ResultModal", singleheader);
  //   console.log("isOpen", isOpen);
  return (
    <>
      <div>t4est</div>
      <Modal>
        <OneCard>From Modal</OneCard>
      </Modal>
    </>
  );
};

export default ResultModal;
