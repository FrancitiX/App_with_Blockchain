import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import card from "./../styles/components/Cards.module.css";
import classNames from "classnames";

const CardTypeOne = ({ imagen, titulo, descripcion, action }) => {
  const navigate = useNavigate();

  const Navigate = () => {
    navigate(action);
  };

  const [image, setImage] = useState(imagen);

  useEffect(() => {
    if (!imagen) {
      setImage("src/assets/media/fondo1.jpg");
    }
  }, [imagen]);

  return (
    <div className={card.card} onClick={Navigate}>
      <div className={`${card.cardImage} center`}>
        <img src={image} alt="Registrar propiedad" />
      </div>
      <div className={card.cardInfo}>
        <h4 className={card.cardTitle}>{titulo}</h4>
        <div>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
};

const CardTypeTwo = ({ imagen, titulo, descripcion, subtitle, subinfo, action }) => {
  const navigate = useNavigate();

  const Browse = () => {
    navigate(action);
  };

  const [image, setImage] = useState(imagen);

  useEffect(() => {
    if (!imagen) {
      setImage("src/assets/media/fondo1.jpg");
    }
  }, [imagen]);

  return (
    <div className={classNames(card.card, card.cardVertical)} onClick={Browse}>
      <div className={`${card.cardImage} center`}>
        <img src={image} alt="Registrar propiedad" />
      </div>
      <div className={card.cardInfo}>
        <h4 className={card.cardTitle}>{titulo}</h4>
        <div>
          <p>{descripcion}</p>
        </div>
      </div>
      <div className={card.cardExtraInfo}>
        <p>{subtitle}</p>
        {subinfo}
      </div>
    </div>
  );
};

export { CardTypeOne, CardTypeTwo };
