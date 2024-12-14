import axios from "axios";

const URL = "https://65jztl86-5001.usw3.devtunnels.ms";
// const URL = "http://localhost:5001";

async function postUsuario(formData) {
  const validFormData = {
    name: formData.name.trim(),
    paternal_surname: formData.paternal_surname.trim(),
    maternal_surname: formData.maternal_surname.trim(),
    user_name: formData.user_name.trim(),
    email: formData.email.trim(),
    password: formData.password.trim(),
    type: formData.type,
  };

  try {
    const response = await fetch(URL + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validFormData),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Usuario registrado exitosamente");
      return true;
    } else {
      alert(result.data || "Ocurrió un error");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error al registrar el usuario");
    return false;
  }
}

async function startUsuario(formData, remember) {
  const validFormData = {
    user: formData.user.trim(),
    password: formData.password.trim(),
  };

  try {
    const response = await axios.post(`${URL}/login`, validFormData);

    if (response.data.status === "ok") {
      console.log(response.data);
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem("userName", response.data.usuario);
      storage.setItem("authToken", response.data.token);
      return true;
    } else {
      alert(response.data.data || "Ocurrió un error");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    alert(
      error.response?.data?.data || "Error al iniciar sesión" // Manejo de errores específicos de Axios
    );
    return false;
  }
}

function userLogged() {
  const token = localStorage.getItem("authToken");
  if (!token) return false;
  return false;
  // try {
  //   const payload = JSON.parse(atob(token.split(".")[1]));
  //   const isExpired = payload.exp * 1000 < Date.now();
  //   return !isExpired;
  // } catch (e) {
  //   console.log("error: " + e);
  //   return false;
  // }
}

async function userData() {
  let userToken;

  if (sessionStorage.getItem("authToken")) {
    userToken = sessionStorage.getItem("authToken");
  } else {
    userToken = localStorage.getItem("authToken");
  }
  // console.log("Local: " + localStorage.getItem("authToken"));
  // console.log("Sesion: " + sessionStorage.getItem("authToken"));

  // console.log(userToken);

  try {
    // const response = await axios.post(`${URL}/userData`, userToken);
    const response = await axios.post(
      `${URL}/userData`,
      {}, // Cuerpo vacío si no necesitas enviar datos adicionales
      {
        headers: {
          Authorization: `Bearer ${userToken}`, // Envía el token en el encabezado
        },
      }
    );

    if (response.data.status === "ok") {
      const userData = {
        name: response.data.data.name.name,
        parentName: response.data.data.name.paternal_surname,
        mothernName: response.data.data.name.maternal_surname,
        user: response.data.data.user_name,
        type: response.data.data.type,
      };
      localStorage.setItem("usuario", JSON.stringify(userData));
    } else {
      console.error("Error al obtener datos del usuario:", response.data);
    }
  } catch (error) {
    console.error("Error: " + error);
  }
}

function logoutUser() {
  if (localStorage.getItem("userName")) {
    localStorage.removeItem("authToken");
    localStorage.removeItem("usuario");
    localStorage.clear();
  } else {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("usuario");
    sessionStorage.clear();
  }

  alert("Sesión cerrada");
}

export { postUsuario, startUsuario, userLogged, userData, logoutUser };
