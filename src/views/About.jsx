
import './../styles/About.css'

function About() {
  return (
    <div>

      <h1>About</h1>
      <div className="topic-ooptions">
        <div className="topic-item">
          <p className="description">
            Descubre los fundamentos y aplicaciones del blockchain.
          </p>
          <a className="topic active">Blockchain</a>
        </div>
        <div className="topic-item">
          <p className="description">
            Aprende sobre la protección de obras a través del copyright.
          </p>
          <a className="topic">Copyright</a>
        </div>
        <div className="topic-item">
          <p className="description">
            Conoce las leyes de derechos de autor y cómo aplicarlas.
          </p>
          <a className="topic">Derechos de autor</a>
        </div>
        <div className="topic-item">
          <p className="description">
            Entiende cómo usar correctamente los derechos de autor.
          </p>
          <a className="topic">Uso correcto de derechos de autor</a>
        </div>
        <div className="topic-item">
          <p className="description">
            Selecciona esta opción si no sabes qué tema elegir.
          </p>
          <a className="topic">No sé xd</a>
        </div>
      </div>
    </div>
  );
}

export default About;