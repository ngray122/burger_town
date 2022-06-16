import React, { useContext } from "react";
import { Modal, CardBody, ModalHeader } from "reactstrap";
import { ApiContext } from "../../App";
import OneCard from "../card/OneCard";
import CardImg from "../card/CardImg";
import CardTitle from "../card/CardTitle";
import CardSubtitle from "../card/CardSubtitle";

const ResultModal = () => {
  const { singleHeader } = useContext(ApiContext);

  // let item = singleHeader.map((item)=>
  // return )
  //   console.log("singleheader in ResultModal", singleHeader);
  //   console.log("isOpen", isOpen);
  return (
    <>
      <div>test text</div>
      <Modal>
        <OneCard>
          <CardBody>
            <CardImg />
            <ModalHeader>
              <CardTitle>Title here</CardTitle>
            </ModalHeader>
            <CardSubtitle />
            <CardSubtitle />
          </CardBody>
        </OneCard>
      </Modal>
    </>
  );
};

export default ResultModal;
