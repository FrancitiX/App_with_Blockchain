import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputUser,
  InputPassword,
  InputDefault,
  InputMedio,
  Selector,
} from "./../components/Inputs";
import { postUsuario } from "../functions/usuario";
import styles from "./../styles/Sesion.module.css";

function Register() {
  const [step, setStep] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    paternal_surname: "",
    maternal_surname: "",
    user_name: "",
    email: "",
    password: "",
    type: 2
  });

  const navigate = useNavigate();

  const handleNext = () => {
    if (step === 1 && !formData.name) {
      alert("Por favor, ingresa tu nombre.");
      return;
    }
    setStep(step + 1);
  };

  const change = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Registrar = async () => {
    const isRegistered = await postUsuario(formData);
    if (isRegistered) {
      navigate("/");
    }
  };

  const userTypes = [
    { value: 2, label: "Notario" },
    { value: 3, label: "Corredor público" },
    { value: 4, label: "Usuario general" },
  ];

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

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="center">
              <p className={styles.helpText}>
                Ingresa un usuario y contraseña para crear tu usuario
              </p>
            </div>

            {step === 1 && (
              <div className={styles.form_group}>
                <InputDefault
                  type="text"
                  name="name"
                  id="name"
                  placeHolder="Nombre"
                  value={formData.name}
                  change={change}
                  req={true}
                />
                <div className={styles.twoInputs}>
                  <InputMedio
                    type="text"
                    name="paternal_surname"
                    id="paternal_surname"
                    placeHolder="Apellido Paterno"
                    value={formData.paternal_surname}
                    change={change}
                    req={true}
                  />
                  <InputMedio
                    type="text"
                    name="maternal_surname"
                    id="maternal_surname"
                    placeHolder="Apellido Materno"
                    value={formData.maternal_surname}
                    change={change}
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
                  name="user_name"
                  id="user_name"
                  placeHolder="Usuario"
                  value={formData.user}
                  change={change}
                  req={true}
                />
                <InputUser
                  type="email"
                  name="email"
                  id="emailInput"
                  placeHolder="Correo"
                  value={formData.email}
                  change={change}
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
                  name="type"
                  id="type"
                  title="Tipo de usuario"
                  options={userTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                  change={change}
                />

                <InputPassword
                  name="password"
                  id="password"
                  placeHolder="Contraseña"
                  value={formData.password}
                  change={change}
                />
                <button
                  type="button"
                  onClick={Registrar}
                  className={styles.next}
                >
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
