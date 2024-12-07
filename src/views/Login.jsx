// import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./../styles/Sesion.module.css";
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
      <div className={styles.form_container}>
        <div className={styles.form_data}>
          <img className={styles.logo} src="src\assets\media\Logo3.jpeg" alt="logo" />
          <h1 className={styles.title}>Inicar sesion</h1>

          <form>
            <div className="center">
              <p className={styles.helpText}>
                Puedes inicar sesion con tu usuario o correo electronico
              </p>
            </div>

            <div className={styles.form_group}>
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
              <button className={classNames(styles.buttonSesion, styles.next)} type="button" onClick={Home}>
                Iniciar sesión
              </button>
            </div>

            <div className={styles.other_sesion}>
              <p>No tienes cuenta?</p>
              <button className={styles.noButton} type="button" onClick={Register}>
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
