// import React from "react";

const Blockchain = () => {
  return (
    <div className="topic_speak">
      <h3>¿Qué es Blockchain?</h3>
      <div className="topic_text">
        <p>
          Blockchain es una tecnología de registro descentralizado que permite
          almacenar y transferir datos de manera segura, transparente e
          inmutable. Consiste en una cadena de bloques interconectados, donde
          cada bloque contiene un conjunto de transacciones o datos.
        </p>
        <div className="topic-image center">
          <img src="src\assets\media\blockchain.jpg" alt="blockchain" />
        </div>
        <p>Características clave:</p>
        <ul>
          <li>
            Descentralización: No depende de una entidad central (como un banco
            o gobierno). En lugar de eso, está distribuido a través de una red
            de nodos (computadoras).
          </li>
          <li>
            Seguridad: Cada bloque contiene un hash (código único) del bloque
            anterior, lo que hace que modificar un bloque sea extremadamente
            difícil, ya que alteraría todos los bloques posteriores.
          </li>
          <li>
            Inmutabilidad: Una vez que los datos se registran en un bloque, no
            pueden ser alterados. Esto asegura la integridad de la información.
          </li>
          <li>
            Transparencia: Cualquier transacción registrada en el blockchain
            puede ser vista por todos los participantes de la red, lo que
            garantiza la transparencia.
          </li>
          <li>
            Consenso: Las transacciones son validadas por consenso entre los
            nodos de la red, lo que elimina la necesidad de intermediarios.
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Blockchain };
