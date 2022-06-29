import React, { useContext } from "react";
import { CardImg } from "reactstrap";
import styles from "./OneCard.module.css";
import { ApiContext } from "../../App";

const OneCardImg = ({ image }) => {
  const { openModal } = useContext(ApiContext);

  return image ? (
    <div>
      <CardImg
        className={openModal ? styles.modal_img : styles.card_img}
        alt="character"
        src={image}
        width="100%"
        top
      ></CardImg>
      {console.log("isToggle", openModal)}
    </div>
  ) : null;
};

export default OneCardImg;
