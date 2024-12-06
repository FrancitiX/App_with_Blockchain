// import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./../styles/Sesion.module.css";
import { InputDefault, InputPassword } from "./../components/Inputs";

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
      <div className={styles.form_container}>
        <div className={styles.form_data}>
          <img className={styles.logo} src="src/assets/media/Logo3.jpeg" alt="logo" />
          <h1 className={styles.title}>Registro</h1>

          <form>
            <div className={styles.center}>
              <p className={styles.helpText}>
                Ingresa un usuario y contraseña para crear tu usuario
              </p>
            </div>

            <div className={styles.form_group}>
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
              placeHolder="Contraseña"
            />

            <div>
              <button
                className={`${styles.buttonSesion} ${styles.next}`}
                type="button"
                onClick={Home}
              >
                Registrar
              </button>
            </div>

            <div className={styles.other_sesion}>
              <p>Ya tienes cuenta?</p>
              <button className={styles.noButton} type="button" onClick={Login}>
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
