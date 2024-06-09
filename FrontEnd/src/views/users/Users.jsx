import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PrevDescription from "./components/PrevDescription";
import CardInfo from "./components/CardInfo";
import NavigationBar from "../../shared/NavigationBar";

const Users = () => {
  const [form, setForm] = useState({
    description: "",
    prescription: "",
  });

  const [descriptions, setDescriptions] = useState([]);
  const { id } = useParams();
  const [user, setUser] = useState([]);

  const fetchUserById = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/" + id);
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUser(data);
      return data;
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

const handleGenerateHelp = async () => {
  console.log("handleGenerateHelp called"); // Add this line for debugging
  const prompt = { prompt: form.description };
  try {
    const response = await fetch("http://localhost:3000/chat/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prompt),
    });
    if (!response.ok) {
      throw new Error("Failed to generate suggestion");
    }
    const data = await response.json();
    console.log("AI Response:", data.response);
    setForm((prevForm) => ({ ...prevForm, prescription: data.response }));
  } catch (error) {
    console.error("Error generating suggestion:", error);
  }
};

  const fetchDescription = async () => {
    try {
      const response = await fetch("http://localhost:3000/description/" + id);
      if (!response.ok) {
        throw new Error("Failed to fetch descriptions");
      }
      const data = await response.json();
      setDescriptions(data);
      return data;
    } catch (error) {
      console.error("Error fetching descriptions:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:3000/description/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error("Failed to save description");
      }
      const data = await response.json();
      console.log("Description saved:", data);
      window.location.reload();
      return data;
    } catch (error) {
      console.error("Error saving description:", error);
    }
  };

  useEffect(() => {
    fetchUserById();
    fetchDescription();
  }, []);

  return (
    <NavigationBar>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
            gridColumn: "1 / 2",
            gridRow: "1 / 2",
          }}
        >
          <CardInfo user={user} />
        </div>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
            gridColumn: "2 / 3",
            gridRow: "1 / 2",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div>
            <p>¿En qué necesitas ayuda financieramente?</p>
            <textarea
              value={form.description}
              name="description"
              onChange={handleInputChange}
              style={{
                width: "100%",
                height: "100px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div>
            <p>Sugerencia</p>
            <textarea
              value={form.prescription}
              name="prescription"
              onChange={handleInputChange}
              style={{
                width: "100%",
                height: "100px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div>
            <button
              onClick={handleGenerateHelp}
              style={{
                height: "40px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                color: "white",
                fontSize: "16px",
                padding: "0 20px",
                backgroundColor: "#b29cb7",
              }}
            >
              Generar sugerencia
            </button>
          </div>
          <div>
            <button
              onClick={handleSave}
              style={{
                height: "40px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                color: "white",
                fontSize: "16px",
                padding: "0 20px",
                backgroundColor: "#4caf50",
                marginTop: "10px",
              }}
            >
              Guardar
            </button>
          </div>
        </div>
        <div
          style={{
            gridColumn: "1 / 3",
            gridRow: "2 / 3",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {descriptions.map((item, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                backgroundColor: "white",
                borderRadius: "5px",
                boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h4>Consulta</h4>
              <p>{item.description}</p>
              <h4>Sugerencia</h4>
              <p>{item.prescription}</p>
            </div>
          ))}
        </div>
      </div>
    </NavigationBar>
  );
};

export default Users;
