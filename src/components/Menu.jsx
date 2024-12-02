// import {useState} from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Menu.css";

function Menu({ active, onClose }) {
  const navigate = useNavigate();

  const Login = () => {
    navigate("/");
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    // Actualiza el tema en el atributo `data-theme` de HTML
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const menuClass = active ? "active" : "";
  const modalClass = active ? "modalActive" : "";

  return (
    <>
      <div
        className={`modal ${modalClass}`}
        onClick={onClose} // Cierra el menú al hacer clic en el modal
      ></div>

      <menu className={`menu_container ${menuClass}`} type="toolbar">
        <section>
        <div className="app_title">
              <img
                className="nav_logo"
                src="src\assets\media\Logo1.jpeg"
                alt="Logo app"
              />
              <h1>RPD</h1>
            </div>
          <div className="underline"></div>
        </section>

        <ul className="options">
          <div className="menu_option">Registrar Propiedad</div>
          <div className="menu_option">Mis propiedades</div>
          <div className="menu_no_option">
            <p>
              Tema:{" "}
              <span id="theme">{theme === "light" ? "Claro" : "Oscuro"}</span>
            </p>
            <label className="switch">
              <input
                type="checkbox"
                id="themeSwitch"
                name="themeSwitch"
                checked={theme === "dark"}
                onChange={changeTheme}
              ></input>
              <span className="slider themeSwitch"></span>
            </label>
          </div>
          <div className="exit" onClick={Login}>
            Cerrar sesión
          </div>
        </ul>

        <div className="copy">SmartOrder &copy;2024</div>
      </menu>
    </>
  );
}

export default Menu;
