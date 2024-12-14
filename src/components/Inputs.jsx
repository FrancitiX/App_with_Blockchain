import { useState } from "react";
import style from "./../styles/components/Inputs.module.css";
import classNames from "classnames";

// InputDefault.props {
//     type: String,
// }

const InputDefault = ({ type, name, id, placeHolder, req, value, change }) => {
  // const [value, setValue] = useState("");

  return (
    <div className={style.inputContain}>
      <input
        className={style.input}
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={change}
      />
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const InputMedio = ({ type, name, id, placeHolder, req, value, change }) => {
  // const [value, setValue] = useState("");

  return (
    <div className={style.inputContain_medio}>
      <input
        className={style.input}
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={change}
      />
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const InputUser = ({ type, name, id, placeHolder, req, value, change }) => {
  // const [value, setValue] = useState("");

  return (
    <div className={style.inputContain}>
      <input
        className={style.inputSession}
        type={type}
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={change}
        autoComplete="username"
      />
      <div className={style.passwordVisible}>
        <span className="material-symbols-outlined">person</span>
      </div>
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const InputEmail = ({ type, name, id, placeHolder, req, value, change }) => {
  // const [value, setValue] = useState("");

  return (
    <div className={style.inputContain}>
      <input
        className={style.inputSession}
        type="email"
        name={name}
        id={id}
        required={req ? true : undefined}
        value={value}
        onChange={change}
        autoComplete="email"
      />
      <div className={style.passwordVisible}>
        <span className="material-symbols-outlined">alternate_email</span>
      </div>
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

const InputPassword = ({ name, id, placeHolder, value, change }) => {
  const [visible, setVisible] = useState(false);

  const passwordVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className={style.inputContain}>
      <input
        className={classNames(style.inputSession, style.passwordInput)}
        type={visible ? "text" : "password"}
        name={name}
        id={id}
        required
        value={value}
        onChange={change}
        autoComplete="current-password"
      />
      <div className={style.passwordVisible} onClick={passwordVisible}>
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

const Selector = ({ name, id, title, options, change }) => {
  return (
    <div className={style.selectorContain}>
      <label htmlFor={id}>{title}</label>
      <select className={style.Selector} name={name} id={id} onChange={change}>
        {options}
      </select>
    </div>
  );
};

export { InputDefault, InputMedio, InputUser, InputEmail, InputPassword, Selector };
