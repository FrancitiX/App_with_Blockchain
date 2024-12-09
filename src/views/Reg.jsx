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
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para el modal
  const navigate = useNavigate();

  const handleNext = () => {
    setStep(step + 1);
  };

  const Login = () => {
    navigate("/");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
                      <option value="3">Usuario general</option>
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
              <button
                className={styles.noButton}
                type="button"
                onClick={toggleModal}
              >
                Términos y Condiciones
              </button>
            </div>
          </form>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Términos y Condiciones</h2>
            <p>
              **Última actualización:** 8 de diciembre de 2024
              <br />
              Bienvenido a nuestra plataforma de registro de propiedades
              digitales. Al utilizar nuestros servicios, aceptas los siguientes
              términos y condiciones. Si no estás de acuerdo con ellos, no
              deberás usar esta plataforma.
            </p>
            <h3>Definiciones</h3>
            <p>
              <strong>Propiedad Digital:</strong> Se refiere a cualquier activo
              intangible registrado a través de nuestra plataforma, como
              derechos de autor, marcas, o cualquier contenido digital protegido
              por la ley.
            </p>
            <p>
              <strong>Usuario:</strong> Persona física o jurídica que utiliza la
              plataforma para registrar propiedades digitales.
            </p>
            <h3>Contacto</h3>
            <p>
              Si tienes preguntas o necesitas más información, contáctanos en:
              <br />
              <strong>Correo:</strong> smartorder@gmail.com
              <br />
              <strong>Teléfono:</strong> +52 33 3658 2647
            </p>
            <button
              className={styles.closeButton}
              type="button"
              onClick={toggleModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
