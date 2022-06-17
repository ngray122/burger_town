import React, { useContext } from "react";
import { Modal, ModalHeader, Button, ModalBody } from "reactstrap";
import { ApiContext } from "../../App";
import OneCard from "../card/OneCard";
import CardImg from "../card/CardImg";
import CardTitle from "../card/CardTitle";
import CardSubtitle from "../card/CardSubtitle";

const ResultModal = ({ item }) => {
  const { toggle, openModal } = useContext(ApiContext);
  console.log("item in result modal", item);

  // let item = singleHeader.map((item)=>
  // return )
  //   console.log("singleheader in ResultModal", singleHeader);
  //   console.log("isOpen", isOpen);
  return (
    <>
      <div>
        {console.log("toggle in result modal", openModal)}
        <Modal isOpen autoFocus key={item.id} onClick={toggle}>
          <ModalBody>
            <CardTitle name={item.name} />
            <CardImg image={item.image} />
            <CardSubtitle gender={item.gender} />
            <CardSubtitle season={item.season} episode={item.episode} />
            <CardSubtitle hairColor={item.hairColor} />
            <CardSubtitle occupation={item.occupation} />
            <CardSubtitle voicedBy={item.voicedBy} />
            <CardSubtitle wikiUrl={item.wikiUrl} />
            <CardSubtitle firstEpisode={item.firstEpisode} />
            <CardSubtitle age={item.age} />
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};

export default ResultModal;
