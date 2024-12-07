// import React from "react";
import styles from "./../styles/components/Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div>
          <img src="src\assets\media\jalisco.png" alt="JALISCO" />
        </div>
        <div>
          <h3>RPD</h3>
          <div>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
            </ul>
          </div>
        </div>
        <div>
          <img src="src\assets\media\jalisco.png" alt="JALISCO" />
        </div>
      </div>
      <div className={styles.copyright}>SmartOrder &copy;2024</div>
    </footer>
  );
}

export default Footer;
