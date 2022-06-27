import React, { useContext } from "react";
import { Modal, ModalBody } from "reactstrap";
import { ApiContext } from "../../App";
import OneCard from "../card/OneCard";
import CardImg from "../card/CardImg";
import OneCardTitle from "../card/OneCardTitle";
import OneCardSubtitle from "../card/OneCardSubtitle";
import OneCardText from "../card/OneCardText";

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
              <CardImg image={image} />
              <OneCardTitle name={name} />
              <OneCardSubtitle firstEpisode={firstEpisode} />

              <OneCardText gender={gender} />
              <OneCardText season={season} episode={episode} />
              <OneCardText hairColor={hairColor} />
              <OneCardText occupation={occupation} />
              <OneCardText voicedBy={voicedBy} />
              <OneCardText wikiUrl={wikiUrl} />

              <OneCardText age={age} />
              <OneCardText relatives={relatives} />
              <OneCardText airDate={airDate} />
              <OneCardText totalViewers={totalViewers} />
            </ModalBody>
          </OneCard>
        </Modal>
      </div>
    </>
  );
};

export default ResultModal;
