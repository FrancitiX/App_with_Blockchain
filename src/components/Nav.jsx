import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import styles from "../styles/components/Navbar.module.css";
import classNames from "classnames";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("usuario"));

  const adminVisible = user.type === "1" ? styles.visible : styles.oculto;
  const modVisible = user.type === "2" ? styles.visible : styles.oculto;

  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev); // Cambia el estado actual
  };

  const closeMenu = () => {
    setMenuActive(false); // Cierra el menú
  };

  return (
    <>
      <header>
        <nav className={styles.nav}>
          <div className={styles.navLeft}>
            <div className={styles.menu} onClick={toggleMenu}>
              <div className={styles.menu_bare}></div>
              <div className={styles.menu_bare}></div>
              <div className={styles.menu_bare}></div>
            </div>
            <Link to="/Home" className={styles.appTitle}>
              <img
                className={styles.logo}
                src="src/assets/media/Logo3.jpeg"
                alt="Logo app"
              />
              <h1>RPD</h1>
            </Link>
          </div>

          <div className={styles.nav_options}>
            <Link to="/users" id={styles.usuarios} className={classNames(styles.nav_option, adminVisible)}>
              Administración
            </Link>

            <Link to="/users" id={styles.usuarios} className={classNames(styles.nav_option, modVisible)}>
              Solicitudes
            </Link>

            <div className={styles.reference}>
              <Link to="/Home/#actions" id={styles.acciones} className={styles.nav_option}>
                Acciones disponibles
              </Link>
              <div className={styles.subOption}>
                <Link to="/digital-register" className={styles.nav_subOption}>
                  Servicios
                </Link>
                <Link to="/" className={styles.nav_subOption}>
                  Solcitar cita
                </Link>
                <Link to="/" className={styles.nav_subOption}>
                  Revisar titulos
                </Link>
                <Link to="/" className={styles.nav_subOption}>
                  recaudadora virtual
                </Link>

              </div>
            </div>

            <div className={styles.reference}>
              <Link to="/Home/#topics" id={styles.temas} className={styles.nav_option}>
                Temas de interés
              </Link>
              <div className={styles.subOption}>
              <Link to="/" className={styles.nav_subOption}>
                  Blockchain
                </Link>
                <Link to="/" className={styles.nav_subOption}>
                  Copyright
                </Link>
                <Link to="/" className={styles.nav_subOption}>
                  Derechos de autor
                </Link>
                <Link to="/" className={styles.nav_subOption}>
                  Uso correcto D.A.
                </Link>
                <Link to="/" className={styles.nav_subOption}>
                  recaudadora virtual
                </Link>

              </div>
            </div>

            <Link to="/about" id={styles.nosotros} className={styles.nav_option}>
              Sobre nosotros
            </Link>
            <Link
              to="/profile"
              id={styles.usuario} className={classNames(styles.nav_option, styles.user)}
            >
              <img
                className={styles.userImage}
                src="/media/user.png"
                alt="user image"
              />
            </Link>
          </div>
        </nav>
      </header>

      <Menu active={menuActive} onClose={closeMenu} />
    </>
  );
}

export default Navbar;
