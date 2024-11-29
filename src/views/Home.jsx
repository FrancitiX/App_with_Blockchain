import Navbar from "./../components/Nav";
import Footer from "../components/Footer";
import { CardTypeOne, CardTypeTwo } from "../components/Cards";
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
              imagen="src\assets\media\registro_propiedad.jpg"
              titulo="Solicitar cita"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
            />

            <CardTypeOne
              imagen="src\assets\media\registro_propiedad.jpg"
              titulo="Consultar tramites"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
            />

            <CardTypeOne
              imagen=""
              titulo="Revisar titulos disponibles"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
            />

            <CardTypeOne
              imagen="src\assets\media\registro_propiedad.jpg"
              titulo="Consulta de Documentos"
              descripcion="En este espacio podras realizar el registro de tu propiedad
                    digital"
            />
          </div>
        </section>

        <section className="container">
          <div>
            <h3>¿Qué es Blockchain?</h3>
          </div>
        </section>

        <section className="container2">
          <h3 className="tile-home">Certificado y avalado por:</h3>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
