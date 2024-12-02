import Navbar from "./../components/Nav";
import Footer from "../components/Footer";
import { CardTypeOne, CardTypeTwo } from "../components/Cards";
import { Blockchain } from "../components/Info";
import "./../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <div className="background">
          <div className="holder center">
            <h1>Registro para tus propiedades digitales</h1>
            <div className="subHolder">
              <span className="bc">
                Con el uso de blockchain podemos mejorar el trato a las
                propiedades digitales y tecnologicas
              </span>
              <p>Certificado por el gobierno de México</p>
            </div>
          </div>
        </div>

        <section className="container">
          <h3 className="tile-home">Acciones disponibles</h3>
          <div className="container-actions">
            <CardTypeTwo
              imagen="src\assets\media\registro_propiedad.jpg"
              titulo="Registrar propiedad digital"
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
              action="/ownership-register"
            />

            <CardTypeOne
              imagen="src\assets\media\solicitud_cita.jpg"
              titulo="Solicitar cita"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
            />

            <CardTypeOne
              imagen="src\assets\media\tramites.jpg"
              titulo="Consultar tramites"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
            />

            <CardTypeOne
              imagen="src\assets\media\titulos.jpg"
              titulo="Revisar titulos disponibles"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
            />

            <CardTypeOne
              imagen="src\assets\media\documentos.jpg"
              titulo="Consulta de Documentos"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
            />
          </div>
        </section>

        <section className="container">
          <div className="center topic-relative">
            <div className="topic-separator">
              <Blockchain />
            </div>

            <div className="topics_container">
              <h1>Conoce más sobre...</h1>

              <div className="topic-ooptions">
                <a className="topic active">Blockchain</a>
                <a className="topic">Copyright</a>
                <a className="topic">Derechos de autor</a>
                <a className="topic">
                  uso correcto de derechos de autor
                </a>
                <a className="topic">No sé xd</a>
              </div>
            </div>
          </div>
        </section>

        <section className="entitys">
          <h3 className="tile-home">Certificado y avalado por:</h3>
          <div className="validations">
            <div id="GBMexico" className="validation center">
              <img src="/logo_blanco.svg" alt="gobierno de México" />
            </div>
            <div id="CPOffice" className="validation center">
              <img
                src="src\assets\media\cp-logo2.png"
                alt="U.S. Copyright Office"
              />
            </div>
            <div id="RPD" className="validation center">
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
