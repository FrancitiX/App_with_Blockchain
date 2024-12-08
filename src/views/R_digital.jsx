import Footer from "../components/Footer";
import styles from "./../styles/Digital.module.css";
import { InputDefault, Selector } from "../components/Inputs";

function R_digital() {
  return (
    <>
      <main className="container">
        <div>
          <h1>Servicio de propiedad digital</h1>
        </div>
        <section className={styles}>
          <div>
            <Selector
              name="tipo"
              id="tipo"
              title="Tipo de registro"
              options={
                <>
                  <option value="1">BUSQUEDA SIMPLE</option>
                  <option value="2">
                    CERTIFICADO DE LIBERTAD O GRAVAMEN HASTA POR 20 AÑOS
                    (OFICINA CENTRAL)
                  </option>
                  <option value="3">
                    CERTIFICADO DE LIBERTAD O GRAVAMEN HASTA POR 20 AÑOS ESTATAL
                    (OFICINAS FORANEAS)
                  </option>
                </>
              }
            />
            <p>
              Realice la busqueda de alguna propiedad suya para modificarla{" "}
            </p>

            <div>
              <InputDefault
                type="text"
                name="title"
                id="title"
                placeHolder="Nombre del material"
                req={true}
              />

              <Selector
                name="tipo"
                id="tipo"
                title="Tipo de obra difital"
                options={
                  <>
                    <option value="1">Imagen</option>
                    <option value="2">Audio</option>
                    <option value="3">Animación</option>
                    <option value="4">Video</option>
                    <option value="4">Modelo 3D</option>
                    <option value="5">Patente</option>
                  </>
                }
              />

              <InputDefault
                type="text"
                name="title"
                id="title"
                placeHolder="Nombre del material"
                req={true}
              />

              <InputDefault
                type="text"
                name="title"
                id="title"
                placeHolder="Descripción"
                req={true}
              />

              <Selector
                name="tipo"
                id="tipo"
                title="Tipo de licencia"
                options={
                  <>
                    <option value="1">Copyright</option>
                    <option value="2">Copyleft</option>
                    <option value="3">Creative Commons</option>
                  </>
                }
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default R_digital;
