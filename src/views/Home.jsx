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
          <div className="blockchain_speak">
            <h3>¿Qué es Blockchain?</h3>
            <div className="blockchain_text">
              <p>
                Blockchain es una tecnología de registro descentralizado que
                permite almacenar y transferir datos de manera segura,
                transparente e inmutable. Consiste en una cadena de bloques
                interconectados, donde cada bloque contiene un conjunto de
                transacciones o datos.
              </p>
              <div className="blockchain-image center">
                <img src="src\assets\media\blockchain.jpg" alt="blockchain" />
              </div>
              <p>Características clave:</p>
              <ul>
                <li>
                  Descentralización: No depende de una entidad central (como un
                  banco o gobierno). En lugar de eso, está distribuido a través
                  de una red de nodos (computadoras).
                </li>
                <li>
                  Seguridad: Cada bloque contiene un hash (código único) del
                  bloque anterior, lo que hace que modificar un bloque sea
                  extremadamente difícil, ya que alteraría todos los bloques
                  posteriores.
                </li>
                <li>
                  Inmutabilidad: Una vez que los datos se registran en un
                  bloque, no pueden ser alterados. Esto asegura la integridad de
                  la información.
                </li>
                <li>
                  Transparencia: Cualquier transacción registrada en el
                  blockchain puede ser vista por todos los participantes de la
                  red, lo que garantiza la transparencia.
                </li>
                <li>
                  Consenso: Las transacciones son validadas por consenso entre
                  los nodos de la red, lo que elimina la necesidad de
                  intermediarios.
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </section>

        <section>
          <h3 className="tile-home">Certificado y avalado por:</h3>
          <div className="validations">
            <div id="GBMexico" className="validation center">
              <img src="public\logo_blanco.svg" alt="gobierno de México" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
