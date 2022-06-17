import React, { useContext } from "react";
import { Modal, ModalBody } from "reactstrap";
import { ApiContext } from "../../App";
import OneCard from "../card/OneCard";
import CardImg from "../card/CardImg";
import CardTitle from "../card/CardTitle";
import CardSubtitle from "../card/CardSubtitle";

const ResultModal = ({ item }) => {
  const { toggle } = useContext(ApiContext);
  const {
    name,
    image,
    gender,
    season,
    episode,
    hairColor,
    occupation,
    voicedBy,
    wikiUrl,
    firstEpisode,
    age,
    relatives,
    airDate,
    totalViewers,
  } = item;
  return (
    <>
      <div>
        <Modal isOpen autoFocus key={item.id} onClick={toggle}>
          <OneCard>
            <ModalBody>
              <CardTitle name={name} />
              <CardImg image={image} />
              <CardSubtitle gender={gender} />
              <CardSubtitle season={season} episode={episode} />
              <CardSubtitle hairColor={hairColor} />
              <CardSubtitle occupation={occupation} />
              <CardSubtitle voicedBy={voicedBy} />
              <CardSubtitle wikiUrl={wikiUrl} />
              <CardSubtitle firstEpisode={firstEpisode} />
              <CardSubtitle age={age} />
              <CardSubtitle relatives={relatives} />
              <CardSubtitle airDate={airDate} />
              <CardSubtitle totalViewers={totalViewers} />
            </ModalBody>
          </OneCard>
        </Modal>
      </div>
    </>
  );
};

export default ResultModal;
