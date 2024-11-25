import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Sesion.css";
import "./../styles/General.css";
import { InputDefault, InputPassword } from "./../components/Inputs";

function Login() {
  // const [count, setCount] = useState(0)
  const navigate = useNavigate();

  const Register = () => {
    navigate("/register");
  };

  const Home = () => {
    navigate("/Home");
  };

  return (
    <>
      <div className="form_container">
        <div className="form_data">
          <img className="logo" src="src\assets\media\Logo1.jpeg" alt="logo" />
          <h1 className="title">Inicar sesion</h1>

          <form>
            <div className="center">
              <p className="helpText">
                Puedes inicar sesion con tu usuario o correo electronico
              </p>
            </div>

            <div className="form_group">
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
              placeHolder="Contrseña"
            />

            <div>
              <button className="next" type="button" onClick={Home}>
                Iniciar sesión
              </button>
            </div>

            <div className="other_sesion">
              <p>No tienes cuenta?</p>
              <button type="button" onClick={Register}>
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
