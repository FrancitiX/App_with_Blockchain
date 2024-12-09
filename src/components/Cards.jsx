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

const CardTypeTwo = ({imagen, titulo, descripcion, subtitle, subinfo, action }) => {
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

const CardUser = ({ userData }) => {
  const user = userData;

  return (
    <div className={card.profileContainer}>
      <div className={card.headerProfile}>
        <img
          src={user.profilePicture || "/media/user.png"}
          alt="Profile"
          className={card.profileImage}
        />
        <h1 className={card.name}>{user.name || "Nombre del Usuario"}</h1>
        <p className={card.bio}>
          {user.bio || "Escribe algo sobre ti aquí..."}
        </p>
      </div>
      <div className={card.details}>
        <h2>Detalles</h2>
        <p>
          <span className="material-symbols-outlined">mail</span>
          {user.email || "correo@ejemplo.com"}
        </p>
        <p>
          <span className="material-symbols-outlined">call</span>{" "}
          {user.phone || "No especificado"}
        </p>
        <p>
          <span className="material-symbols-outlined">person_pin_circle</span>
          {user.address || "No especificada"}
        </p>
      </div>
    </div>
  );
};

const CardUserOption = ({ userData, title, action, icon }) => {
  // const user = userData;

  return (
    <div className={card.profileOption}>
      <h3>{title}</h3>
      {icon}
      <a>
        <strong>{action}</strong>
      </a>
    </div>
  );
};

export { CardTypeOne, CardTypeTwo, CardUser, CardUserOption };
