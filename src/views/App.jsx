// import { useState } from "react";
// import reactLogo from './../assets/react.svg'
// import viteLogo from '/vite.svg'
import "./../styles/Sesion.css";
import "./../styles/General.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="form_container">
        <div className="form_data">
          <h1>SmartOrder</h1>
          <form action="">
            <div className="form_group">
              <label htmlFor="">Usuario</label>
              <input type="text" />
            </div>

            <div className="form_group">
              <label htmlFor="">Contraseña</label>
              <input type="password" name="" id="" />
            </div>

            <div>
              <button>Iniciar sesión</button>
            </div>
          </form>
        </div>
      </div>
    </>

    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  );
}

export default App;
