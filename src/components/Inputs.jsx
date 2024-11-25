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

const InputPassword = ({ name, id, placeHolder }) => {
  const [value, setValue] = useState("");

  return (
    <div className="inputContain">
      <input
        className="input"
        type="password"
        name={name}
        id={id}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label htmlFor={id}>{placeHolder}</label>
    </div>
  );
};

export { InputDefault, InputPassword };
