import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  InputUser,
  InputEmail,
  InputPassword,
  InputDefault,
  InputMedio,
  Selector,
} from "./../components/Inputs";
import { Modal } from "../components/Modal";
import { postUsuario } from "../functions/usuario";
import styles from "./../styles/Sesion.module.css";
import classNames from "classnames";

function Register({ iniciar_sesion, visible }) {
  const [step, setStep] = useState(1);
  const [acept, setAcept] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    paternal_surname: "",
    maternal_surname: "",
    user_name: "",
    email: "",
    password: "",
    type: 2,
  });

  const navigate = useNavigate();
  const [button1, setButton1] = useState("Iniciar sesión");
  const [button2, setButton2] = useState("Siguiente");
  const [menuActive, setMenuActive] = useState(false);

  const Next = () => {
    if (step === 3) {
      if (acept) {
        Registrar();
      } else {
        alert("Por favor acepte los terminos y condiciones")
      }
    } else {
      if (!formData.name) {
        alert("Por favor, ingresa tu nombre.");
        return;
      }
      if (step === 2) {
        if (!formData.email || !formData.user_name) {
          alert("Por favor, ingrese los datos requeridos");
          return;
        }
      }
      setStep(step + 1);
    }
  };

  const Login = () => {
    if (step === 1) {
      iniciar_sesion();
    } else {
      setButton1("Regresar");
      setButton2("Siguiente");
      setStep(step - 1);
    }
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
    setMenuActive((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const hidden = !visible ? styles.hidden : " ";

  return (
    <>
      <div className={classNames(styles.form_data, hidden)}>
        <h1 className={styles.title}>Registro</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="center">
            <p className={styles.helpText}>
              Ingresa un usuario y contraseña para crear tu usuario
            </p>
          </div>
          <div className={styles.sliderInputs}>
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
                <InputEmail
                  name="email"
                  id="email"
                  placeHolder="Correo"
                  value={formData.email}
                  change={change}
                  req={true}
                />
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

                <div className={styles.rememberme}>
                  <input
                    type="checkbox"
                    name="rememberme"
                    id="rememberme"
                    onChange={(e) => setAcept(e.target.checked)}
                  />
                  <p className={styles.termRead}>
                    He leido y acepto los terminos y condiciones
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            className={classNames(styles.twoInputs, styles.buttonsContainer)}
          >
            <button type="button" onClick={Login} className={styles.next}>
              {button1}
            </button>
            <button type="button" onClick={Next} className={styles.next}>
              {button2}
            </button>
          </div>

          <div className={styles.other_sesion}>
            <p>Antes de registrarte</p>
            <button
              className={classNames(styles.term)}
              type="button"
              onClick={toggleModal}
            >
              Términos y Condiciones
            </button>
          </div>
        </form>
      </div>

      <Modal
        show={menuActive}
        onClose={closeMenu}
        info={
          <>
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
          </>
        }
      />
    </>
  );
}

export default Register;
