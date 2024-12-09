async function postPropiedad(formData) {
  const validFormData = {
    owner: formData.owner.trim(),
    title: formData.title.trim(),
    description: formData.description.trim(),
    type: formData.type,
  };

  try {
    const response = await fetch(URL + "/register_digital", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validFormData),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Propiedad registrada exitosamente");
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

async function getMyDigital(name) {
    const validFormData = {
      owner: name.trim(),
    };
  
    try {
      const response = await fetch(URL + "/my_digital", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validFormData),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert("Propiedad registrada exitosamente");
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

export { postPropiedad, getMyDigital };
