import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Sesion.css";
import { InputUser, InputPassword } from "./../components/Inputs";

function Register() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    setStep(step + 1);
  };

  const Home = () => {
    navigate("/Home");
  };

  const Login = () => {
    navigate("/");
  };

  return (
    <>
      <div className="reg_clase">
        <div className="form_container">
          <div className="form_data">
            <img className="logo" src="src\\assets\\media\\Logo3.jpeg" alt="logo" />
            <h1 className="title">Registro</h1>

            <form>
              <div className="center">
                <p className="helpText">
                  Ingresa un usuario y contraseña para crear tu usuario
                </p>
              </div>

              {step === 1 && (
                <div className="form_group">
                  <InputUser
                    type="text"
                    name="user"
                    id="userInput"
                    placeHolder="Usuario"
                    req={true}
                  />
                  <InputUser
                    type="text"
                    name="firstName"
                    id="firstNameInput"
                    placeHolder="Nombre"
                    req={true}
                  />
                  <InputUser
                    type="text"
                    name="lastName"
                    id="lastNameInput"
                    placeHolder="Apellido Paterno"
                    req={true}
                  />
                  <button
                    type="button"
                    onClick={handleNext}
                    className="next"
                  >
                    Siguiente
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="form_group">
                  <InputUser
                    type="text"
                    name="motherLastName"
                    id="motherLastNameInput"
                    placeHolder="Apellido Materno"
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
                    className="next"
                  >
                    Siguiente
                  </button>
                </div>
              )}

              {step === 3 && (
                <div className="form_group">
                  <label htmlFor="userType">Tipo de Usuario</label>
                  <select name="userType" id="userTypeInput">
                    <option value="1">Propietario</option>
                    <option value="2">Comprador</option>
                    <option value="3">SI</option>
                  </select>
                  <InputPassword
                    name="password"
                    id="passwordInput"
                    placeHolder="Contraseña"
                  />
                  <button
                    type="button"
                    onClick={Login}
                    className="next"
                  >
                    Registrar
                  </button>
                </div>
              )}

              <div className="other_sesion">
                <p>Ya tienes cuenta?</p>
                <button className="noButton" type="button" onClick={Login}>
                  Iniciar Sesion
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
