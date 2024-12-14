import { useState, useEffect } from "react";
import Navbar from "./../components/Nav";
import Footer from "../components/Footer";
import { userData } from "../functions/usuario";
import { CardTypeOne, CardTypeTwo } from "../components/Cards";
import { useLocation } from "react-router-dom";
import { Blockchain } from "../components/Info";
import styles from "./../styles/Home.module.css";
import classNames from "classnames";

function Home() {
  userData();
  const [activeTopic, setActiveTopic] = useState("Blockchain");
  const User_name =
    localStorage.getItem("userName") || sessionStorage.getItem("userName");

  const topicActive = (topicName) => {
    setActiveTopic(topicName); // Actualiza el estado con el tema activo
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  

  return (
    <>
      <Navbar />

      <main>
        <div className={styles.background}>
          <div className={`${styles.holder} center`}>
            <h1>Registro para tus propiedades digitales {User_name}</h1>
            <div className={styles.subHolder}>
              <span className={styles.bc}>
                Con el uso de blockchain podemos mejorar el trato a las
                propiedades digitales y tecnologicas
              </span>
              <p>Certificado por el gobierno de México</p>
            </div>
          </div>
        </div>

        <section id="actions" className={styles.container}>
          <h3 className={styles.tileHome}>
            Selecciona la acción que requieres realizar
          </h3>
          <div className={styles.containerActions}>
            <CardTypeTwo
              imagen="src\assets\media\registro_propiedad.jpg"
              titulo="Servicios de propiedad digital"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
              subtitle="Recuerda contar con: "
              subinfo={
                <ul>
                  <li>Tu firma digital</li>
                  <li>La documentacion requerida</li>
                  <li>No sé xd</li>
                </ul>
              }
              action="/digital-register"
            />

            <CardTypeOne
              imagen="src\assets\media\solicitud_cita.jpg"
              titulo="Solicitar cita"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
            />

            <CardTypeOne
              imagen="src\assets\media\tramites.jpg"
              titulo="Servicios digitales"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
            />

            <CardTypeOne
              imagen="src\assets\media\titulos.jpg"
              titulo="Revisar titulos"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
            />

            <CardTypeOne
              imagen="src\assets\media\documentos.jpg"
              titulo="Recaudadora virtual"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
            />
          </div>
        </section>

        <section id="topics" className={styles.container}>
          <div className={`${styles.topicRelative} center`}>
            <div className={styles.topicSeparator}>
              <Blockchain />
            </div>

            <div className={styles.topicsContainer}>
              <h1>Conoce más sobre...</h1>

              <div className={styles.topicOptions}>
                {/* <a className={classNames(styles.topic, styles.active)} onClick={topicActive}>Blockchain</a>
                <a className={classNames(styles.topic)} onClick={topicActive}>Copyright</a>
                <a className={classNames(styles.topic)} onClick={topicActive}>Derechos de autor</a>
                <a className={classNames(styles.topic)} onClick={topicActive}>
                  uso correcto de derechos de autor
                </a>
                <a className={classNames(styles.topic)} onClick={topicActive}>No sé xd</a> */}
                {[
                  "Blockchain",
                  "Copyright",
                  "Derechos de autor",
                  "Uso correcto de derechos de autor",
                  "No sé xd",
                ].map((topic) => (
                  <a
                    key={topic}
                    className={classNames(styles.topic, {
                      [styles.active]: activeTopic === topic,
                    })}
                    onClick={() => topicActive(topic)}
                  >
                    {topic}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.entitys}>
          <h3 className={styles.tileHome}>Certificado y avalado por:</h3>
          <div className={styles.validations}>
            <div id={styles.GBMexico} className={`${styles.validation} center`}>
              <img src="/logo_blanco.svg" alt="gobierno de México" />
            </div>
            <div id={styles.CPOffice} className={`${styles.validation} center`}>
              <img
                src="src\assets\media\cp-logo2.png"
                alt="U.S. Copyright Office"
              />
            </div>
            <div id={styles.RPD} className={`${styles.validation} center`}>
              <img src="/favicon.svg" alt="gobierno de México" />
              <h1>RPD</h1>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
