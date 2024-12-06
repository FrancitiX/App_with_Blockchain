// import React from "react";
import { useNavigate } from "react-router-dom";
import loginStyle from "./../styles/Sesion.module.css";
import { InputUser, InputPassword } from "./../components/Inputs";
import classNames from 'classnames';

function Login() {

  const navigate = useNavigate();

  const Register = () => {
    navigate("/register");
  };

  const Home = () => {
    navigate("/Home");
  };

  return (
    <>
      <div className={loginStyle.form_container}>
        <div className={loginStyle.form_data}>
          <img className={loginStyle.logo} src="src\assets\media\Logo3.jpeg" alt="logo" />
          <h1 className={loginStyle.title}>Inicar sesion</h1>

          <form>
            <div className="center">
              <p className={loginStyle.helpText}>
                Puedes inicar sesion con tu usuario o correo electronico
              </p>
            </div>

            <div className={loginStyle.form_group}>
              <InputUser
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
              <button className={classNames(loginStyle.buttonSesion, loginStyle.next)} type="button" onClick={Home}>
                Iniciar sesión
              </button>
            </div>

            <div className={loginStyle.other_sesion}>
              <p>No tienes cuenta?</p>
              <button className={loginStyle.noButton} type="button" onClick={Register}>
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
