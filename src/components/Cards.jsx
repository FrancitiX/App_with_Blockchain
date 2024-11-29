import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Cards.css";

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
    <div className="card" onClick={Navigate}>
      <div className="card-image center">
        <img src={image} alt="Registrar propiedad" />
      </div>
      <div className="card-info">
        <h4 className="card-title">{titulo}</h4>
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
    <div className="card cardVertical" onClick={Browse}>
      <div className="card-image center">
        <img src={image} alt="Registrar propiedad" />
      </div>
      <div className="card-info">
        <h4 className="card-title">{titulo}</h4>
        <div>
          <p>{descripcion}</p>
        </div>
      </div>
      <div className="card-extraInfo">
          <p>{subtitle}</p>
          {subinfo}
      </div>
    </div>
  );
};

export { CardTypeOne, CardTypeTwo };
