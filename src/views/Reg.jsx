import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Sesion.css";
import { InputDefault, InputPassword } from "./../components/Inputs";
import Login from "./Login";

function Register() {
  const navigate = useNavigate();

  const Home = () => {
    navigate("/Home");
  };

  const Login = () => {
    navigate("/");
  };

  return (
    <>
      <div className="form_container">
        <div className="form_data">
          <img className="logo" src="src\assets\media\Logo3.jpeg" alt="logo" />
          <h1 className="title">Registro</h1>

          <form>
            <div className="center">
              <p className="helpText">
                Ingresa un usuario y contraseña para crear tu usuario
              </p>
            </div>

            <div className="form_group">
              <InputDefault
                type="text"
                name="user"
                id="userInput"
                placeHolder="Usuario"
                req={true}
              />
            </div>

            <InputPassword
              name="password"
              id="passwordInput"
              placeHolder="Contrseña"
            />

            <div>
              <button
                className="buttonSesion next"
                type="button"
                onClick={Home}
              >
                Registrar
              </button>
            </div>

            <div className="other_sesion">
              <p>Ya tienes cuenta?</p>
              <button className="noButton" type="button" onClick={Login}>
                Iniciar Sesion
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
