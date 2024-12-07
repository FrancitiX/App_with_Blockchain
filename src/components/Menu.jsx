// import {useState} from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./../styles/components/Menu.module.css";
import classNames from "classnames";

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

  const menuClass = active ? styles.active : "";
  const modalClass = active ? styles.modalActive : "";

  return (
    <>
      <div
        className={classNames(styles.modal, modalClass)}
        onClick={onClose} // Cierra el menú al hacer clic en el modal
      ></div>

      <menu
        className={classNames(styles.menuContainer, menuClass)}
        type="toolbar"
      >
        <section>
          <div className={styles.appTitle}>
            <img
              className={styles.logo}
              src="src\assets\media\Logo1.jpeg"
              alt="Logo app"
            />
            <h1>RPD</h1>
          </div>
          <div className={styles.underline}></div>
        </section>

        <ul className={styles.options}>
          <div className={styles.menuOption}>Registrar Propiedad</div>
          <div className={styles.menuOption}>Mis propiedades</div>
          <div className={styles.menu_no_option}>
            <p>
              Tema:{" "}
              <span id="theme">{theme === "light" ? "Claro" : "Oscuro"}</span>
            </p>
            <label className={styles.switch}>
              <input
                type="checkbox"
                id={styles.themeSwitch}
                name="themeSwitch"
                checked={theme === "dark"}
                onChange={changeTheme}
              ></input>
              <span
                className={classNames(styles.slider, styles.themeSwitch)}
              ></span>
            </label>
          </div>
          <div className={styles.exit} onClick={Login}>
            Cerrar sesión
          </div>
        </ul>

        <div className={styles.copy}>SmartOrder &copy;2024</div>
      </menu>
    </>
  );
}

export default Menu;
