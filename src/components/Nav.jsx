
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "../styles/Navbar.css";

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
        <nav className="nav">
          <div className="nav_left">
            <div className="menu" onClick={toggleMenu}>
              <div className="menu_bare"></div>
              <div className="menu_bare"></div>
              <div className="menu_bare"></div>
            </div>
            <div className="app_title">
              <img
                className="nav_logo"
                src="src\assets\media\Logo1.jpeg"
                alt="Logo app"
              />
              <h1>RPD</h1>
            </div>
          </div>

          <div className="nav_options">
            <Link to="/users" className="nav_option">
              usuarios
            </Link>
            <Link to="/about" className="nav_option">
              Sobre nosotro
            </Link>
            <Link to="/" className="nav_option">
              option
            </Link>
            <Link to="/profile" className="nav_option user">
              <img className="user-image" src="/media/user.png" alt="user image" />
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
