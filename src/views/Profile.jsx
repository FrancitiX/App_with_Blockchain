import Navbar from "../components/Nav";
import { CardUser, CardUserOption } from "../components/Cards";
import styles from "./../styles/Profile.module.css";

function Profile() {
  //   const user = [];

  return (
    <>
      <Navbar />

      {/* <main className={`${styles.background} center`}> */}
      <main className={styles.background}>
        <div className={styles.containerUser}>
          <div className={styles.containerUserOptions}>
            <CardUser userData={""} />
            <div className={styles.optionsUser}>
              <CardUserOption
                userData={""}
                title="Informacion personal"
                icon={<span className="material-symbols-outlined">person</span>}
                action="Editar información"
              />
              <CardUserOption
                userData={""}
                title="Seguridad y contraseña"
                icon={<span className="material-symbols-outlined">lock</span>}
                action="cambiar contraseña"
              />

              <CardUserOption
                userData={""}
                title="Configuración"
                icon={
                  <span className="material-symbols-outlined">settings</span>
                }
                action="Ver configuración"
              />
              <CardUserOption
                userData={""}
                title="Mis propiedades"
                icon={
                  <span className="material-symbols-outlined">copyright</span>
                }
                action="Ver propiedades digitales"
              />

              <CardUserOption
                userData={""}
                title="Salir"
                icon={<span className="material-symbols-outlined">logout</span>}
                action="Cerrar sesión"
              />
            </div>
          </div>

          <div className={styles.WalletContainer}>
            <h2 className={styles.walletTitle}>Datos de Wallet</h2>

            <div className={styles.walletContent}>
              <div className={styles.walletCard}>
                <div className={styles.balanceInfo}>
                  <p className={styles.balanceLabel}>Saldo</p>
                  <h1 className={styles.balanceAmount}>$0.00</h1>
                </div>
                <div className={styles.walletContext}>
                  <p>
                    Este es el saldo recaudado por el uso de tus propiedades.
                    ¡Sigue gestionando tus activos para incrementar tus
                    ingresos!
                  </p>
                </div>
                <div className={styles.walletActions}>
                  <button>Ingresar saldo</button>
                  <button>Retirar Saldo</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;

// Instrucciones de uso
// Búsquedas simples
// Podrá realizar la búsqueda por persona o por domicilio, en el caso del domicilio se recomienda detallar el dato lo más posible.
// Para solicitar el resto de los trámites puestos a su disposición mediante este portal requerirá:
// El inmueble sobre el cual se realiza la solicitud debe pertenecer a cualquier municipio del Estado de Jalisco y no contar con actos que impidan la expedición del trámite o servicio solicitado.
// Conocer el folio real asignado a su inmueble (podrá encontrarlo en la boleta registral o en el capítulo de antecedentes de su escritura).
// Los trámites Aviso cautelar o Aviso preventivo, son exclusivos de los Notarios que cuenten con firma electrónica.
// Para cualquier duda o aclaración estamos a sus órdenes en el correo: rppc@jalisco.gob.mx
// Solicitud de más de un certificado de libertad o gravamen
// Para el caso en que requiera solicitar más de un certificado en el mismo trámite, previamente deberá generar un archivo de texto (.txt), en el cual en cada línea anotará el número del folio real. Ejemplo:
// 545454
// 545455
// 545456
// Es indispensable que todos los folios correspondan a la misma región u oficina.
