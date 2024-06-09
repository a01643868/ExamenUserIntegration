import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { GrUserNew } from "react-icons/gr";

const NavigationBar = ({ children }) => {
  const navigate = useNavigate();
  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "40px",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div
          onClick={() => handleNavigate("dashboard")}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginRight: "20px",
            padding: "0 10px",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          <IoHomeOutline />
          <p style={{ marginLeft: "5px", fontSize: "16px", fontWeight: "500" }}>
            Dashboard
          </p>
        </div>
        <div
          onClick={() => handleNavigate("register")}
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            marginRight: "600px",
            padding: "0 10px",
            transition: "background-color 0.3s ease, color 0.3s ease",
          }}
        >
          <GrUserNew />
          <p style={{ marginLeft: "5px", fontSize: "16px", fontWeight: "500" }}>
            Registro
          </p>
        </div>
        <input
          style={{
            border: "1px solid #ccc",
            width: "200px",
            height: "30px",
            borderRadius: "15px",
            padding: "0 10px",
            outline: "none",
            fontSize: "14px",
          }}
          type="text"
          placeholder="Filtrar por nombre"
        />
      </div>
      {children}
    </div>
  );
};
export default NavigationBar;
