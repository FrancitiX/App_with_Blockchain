import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputUser, InputPassword } from "./../components/Inputs";
import { startUsuario } from "../functions/usuario";
import styles from "./../styles/Sesion.module.css";
import classNames from 'classnames';

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user: "".trim(),
    password: "".trim(), 
  });

  const Register = () => {
    navigate("/register");
  };

  const change = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Login = async () => {
    const login = await startUsuario(formData);
    if (login) {
      navigate("/Home");
    }
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

            <div>
              <button className={classNames(styles.buttonSesion, styles.next)} type="button" onClick={Login}>
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
