import { useState } from "react";
import "./../styles/Inputs.css";

// InputDefault.props {
//     type: String,
// }

const InputDefault = ({ type, name, id, placeHolder, req }) => {
  const [value, setValue] = useState("");

  return (
    <div className="inputContain">
      <input
        className="input"
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const InputUser = ({ type, name, id, placeHolder, req }) => {
  const [value, setValue] = useState("");

  return (
    <div className="inputContain">
      <input
        className="inputSession"
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="passwordVisible">
        <span className="material-symbols-outlined">person</span>
      </div>
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const InputPassword = ({ name, id, placeHolder }) => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  const passwordVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="inputContain">
      <input
        className="inputSession passwordInput"
        type={visible ? "text" : "password"}
        name={name}
        id={id}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="passwordVisible" onClick={passwordVisible}>
        {visible ? (
          <span className="material-symbols-outlined">visibility</span> // Mostrar ícono de visibilidad
        ) : (
          <span className="material-symbols-outlined">visibility_off</span> // Mostrar ícono de no visibilidad
        )}
      </div>
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

export { InputDefault, InputUser, InputPassword };
