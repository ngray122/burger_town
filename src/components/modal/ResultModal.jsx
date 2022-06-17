import React, { useContext } from "react";
import { Modal, ModalBody } from "reactstrap";
import { ApiContext } from "../../App";
import OneCard from "../card/OneCard";
import CardImg from "../card/CardImg";
import CardTitle from "../card/CardTitle";
import CardSubtitle from "../card/CardSubtitle";

const ResultModal = ({ item }) => {
  const { toggle } = useContext(ApiContext);

  return (
    <>
      <div>
        <Modal isOpen autoFocus key={item.id} onClick={toggle}>
          <OneCard>
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
              <CardSubtitle relatives={item.relatives} />
            </ModalBody>
          </OneCard>
        </Modal>
      </div>
    </>
  );
};

export default ResultModal;
