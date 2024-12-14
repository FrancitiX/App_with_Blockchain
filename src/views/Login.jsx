import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputUser, InputPassword } from "./../components/Inputs";
import { startUsuario, userLogged } from "../functions/usuario";
import Register from "./Reg";
import styles from "./../styles/Sesion.module.css";
import classNames from "classnames";

function Login() {
  const navigate = useNavigate();

  if (userLogged()) {
    navigate("/Home");
  }

  const [active, setActive] = useState(false);
  const [remember, setRememeber] = useState(false);

  const [formData, setFormData] = useState({
    user: "".trim(),
    password: "".trim(),
  });

  const Registrar = () => {
    setActive(true);
  };

  const iniciar = () => {
    setActive(false);
  };

  const change = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Login = async () => {
    const login = await startUsuario(formData, remember);
    if (login) {
      navigate("/Home");
    }
  };

  const registrar = active ? styles.active : "";
  const hidden = active ? styles.hidden : " ";

  return (
    <>
      <div className={styles.form_container}>
        <div className={`${styles.forms_container} center`}>
          <div className={classNames(styles.form_data, hidden)}>
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
                  id="user"
                  placeHolder="Usuario"
                  value={formData.user}
                  change={change}
                  req={true}
                />
              </div>

              <InputPassword
                name="password"
                id="password"
                placeHolder="Contrseña"
                value={formData.password}
                change={change}
              />

              <div className={styles.rememberme}>
                <input
                  type="checkbox"
                  name="rememberme"
                  id="rememberme"
                  onChange={(e) => setRememeber(e.target.checked)}
                />
                <p>Recordarme</p>
              </div>

              <div
                className={classNames(styles.buttonsContainer, styles.right)}
              >
                <button
                  className={classNames(styles.buttonSesion, styles.next)}
                  type="button"
                  onClick={Login}
                >
                  Iniciar sesión
                </button>
              </div>

              <div className={styles.other_sesion}>
                <p>No tienes cuenta?</p>
                <button
                  className={styles.noButton}
                  type="button"
                  onClick={Registrar}
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>

          <Register iniciar_sesion={iniciar} visible={active}></Register>

          <div className={`${classNames(styles.slider, registrar)} center`}>
            <div className={styles.slider_bg}>
              <div className={styles.slider_content}>
                <h2>El mejor lugar para tus propiedades digitales</h2>
                <img
                  className={styles.logo}
                  src="src\assets\media\Logo3.jpeg"
                  alt="logo"
                />
                <p>
                  Actos y consultas de Comercio{" "}
                  <a
                    target="__blank"
                    href="https://rpc.economia.gob.mx/"
                    className={styles.term}
                  >
                    SIGER 2.0
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
