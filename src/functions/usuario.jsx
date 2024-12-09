// const URL = "https://65jztl86-5001.usw3.devtunnels.ms";
const URL = "http://localhost:5001";

async function postUsuario(formData) {
    const validFormData = {
        name: formData.name.trim(),
        paternal_surname: formData.paternal_surname.trim(),
        maternal_surname: formData.maternal_surname.trim(),
        user_name: formData.user_name.trim(),
        email: formData.email.trim(),
        password: formData.password.trim(),
        type: formData.type,
    }

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

async function startUsuario(formData) {
    const validFormData = {
        user: formData.user.trim(),
        password: formData.password.trim(),
    }

    try {
      const response = await fetch(URL+"/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validFormData),
      });
  
      const result = await response.json();
      if (result.status === "ok") {
        localStorage.setItem("usuario", result.usuario);
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

export { postUsuario, startUsuario };
