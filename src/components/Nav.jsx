
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import styles from "../styles/components/Navbar.module.css";
import classNames from "classnames";

function Navbar() {
  // const [menuActive, setMenuActive] = useState("false");

  // const menu = () => {
  //   setMenuActive()
  // }
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
            <div className={styles.appTitle}>
              <img
                className={styles.logo}
                src="src\assets\media\Logo1.jpeg"
                alt="Logo app"
              />
              <h1>RPD</h1>
            </div>
          </div>

          <div className={styles.nav_options}>
            <Link to="/users" className={styles.nav_option}>
              usuarios
            </Link>
            <Link to="/about" className={styles.nav_option}>
              Sobre nosotros
            </Link>
            <Link to="/" className={styles.nav_option}>
              option
            </Link>
            <Link to="/profile" className={classNames(styles.nav_option, styles.user)}>
              <img className={styles.userImage} src="/media/user.png" alt="user image" />
            </Link>
          </div>
        </nav>
      </header>

      <Menu
        active={menuActive} onClose={closeMenu}
      />
    </>
  );
}

export default Navbar;
