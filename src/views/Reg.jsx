import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./../styles/Sesion.module.css";
import {
  InputUser,
  InputPassword,
  InputDefault,
  InputMedio,
  Selector,
} from "./../components/Inputs";

function Register() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    setStep(step + 1);
  };

  // const Home = () => {
  //   navigate("/Home");
  // };

  const Login = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.form_container}>
        <div className={styles.form_data}>
          <img
            className={styles.logo}
            src="src\\assets\\media\\Logo3.jpeg"
            alt="logo"
          />
          <h1 className={styles.title}>Registro</h1>

          <form>
            <div className="center">
              <p className={styles.helpText}>
                Ingresa un usuario y contraseña para crear tu usuario
              </p>
            </div>

            {step === 1 && (
              <div className={styles.form_group}>
                <InputDefault
                  type="text"
                  name="firstName"
                  id="firstNameInput"
                  placeHolder="Nombre"
                  req={true}
                />
                <div className={styles.twoInputs}>
                  <InputMedio
                    type="text"
                    name="lastName"
                    id="lastNameInput"
                    placeHolder="Apellido Paterno"
                    req={true}
                  />
                  <InputMedio
                    type="text"
                    name="motherLastName"
                    id="motherLastNameInput"
                    placeHolder="Apellido Materno"
                    req={true}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className={styles.next}
                >
                  Siguiente
                </button>
              </div>
            )}

            {step === 2 && (
              <div className={styles.form_group}>
                <InputUser
                  type="text"
                  name="user"
                  id="userInput"
                  placeHolder="Usuario"
                  req={true}
                />
                <InputUser
                  type="email"
                  name="email"
                  id="emailInput"
                  placeHolder="Correo"
                  req={true}
                />
                <button
                  type="button"
                  onClick={handleNext}
                  className={styles.next}
                >
                  Siguiente
                </button>
              </div>
            )}

            {step === 3 && (
              <div className={styles.form_group}>
                <Selector
                  name="type-user"
                  id="type-user"
                  title="Tipo de usuario"
                  options={
                    <>
                      <option value="1">Notario</option>
                      <option value="2">Corredor público</option>
                      <option value="3">Usuaieo general</option>
                    </>
                  }
                />

                <InputPassword
                  name="password"
                  id="passwordInput"
                  placeHolder="Contraseña"
                />
                <button type="button" onClick={Login} className={styles.next}>
                  Registrar
                </button>
              </div>
            )}

            <div className={styles.other_sesion}>
              <p>Ya tienes cuenta?</p>
              <button className={styles.noButton} type="button" onClick={Login}>
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
