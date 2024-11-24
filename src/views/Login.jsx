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
          <h1>SmartOrder</h1>
          <form>
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
              placeHolder="Contrseña de usuario"
            />

            <div>
              <button type="button" onClick={Home}>
                Iniciar sesión
              </button>
            </div>

            <div>
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
