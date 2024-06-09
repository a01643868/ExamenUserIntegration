import { useState } from "react";

const Forms = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    pais: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = {
      ...form,
      [name]: value,
    };
    setForm(newForm);
    console.log(newForm);
  };

  const handleSubmitForm = async () => {
    const res = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    return res.status === 200
      ? alert("Registro exitoso")
      : alert("Error al registro");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#4A4A4A" }}>Register</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <label style={{ fontSize: "14px", color: "#333" }}>Nombre</label>
        <input
          style={{
            height: "35px",
            paddingLeft: "10px",
            borderRadius: "5px",
            border: "1px solid #CCC",
          }}
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
        />
        <label style={{ fontSize: "14px", color: "#333" }}>Email</label>
        <input
          style={{
            height: "35px",
            paddingLeft: "10px",
            borderRadius: "5px",
            border: "1px solid #CCC",
          }}
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <label style={{ fontSize: "14px", color: "#333" }}>Edad</label>
        <input
          style={{
            height: "35px",
            paddingLeft: "10px",
            borderRadius: "5px",
            border: "1px solid #CCC",
          }}
          type="text"
          name="age"
          placeholder="Edad"
          onChange={handleChange}
        />
        <label style={{ fontSize: "14px", color: "#333" }}>Pais</label>
        <input
          style={{
            height: "35px",
            paddingLeft: "10px",
            borderRadius: "5px",
            border: "1px solid #CCC",
          }}
          type="text"
          name="pais"
          placeholder="Pais"
          onChange={handleChange}
        />
        <button
          onClick={handleSubmitForm}
          style={{
            height: "40px",
            backgroundColor: "#B29CB7",
            color: "#FFF",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            marginTop: "10px",
          }}
          type="submit"
        >
          Registar
        </button>
      </form>
    </div>
  );
};
export default Forms;
