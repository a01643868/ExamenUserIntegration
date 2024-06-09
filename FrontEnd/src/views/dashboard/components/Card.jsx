import React from "react";
import { useNavigate } from "react-router-dom";
import usercoffee from "../../../assets/usercoffee.svg";

const Card = ({ user }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(user.id);
    navigate(`/users/${user.id}`);
  };

  return (
    <div
      style={{
        width: "340px",
        height: "120px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        cursor: "pointer",
        transition: "transform 0.2s",
      }}
      onClick={handleClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ marginRight: "20px" }}>
        <img
          src={usercoffee}
          width={80}
          alt="userCoffee"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div>
        <p
          style={{
            margin: 0,
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          {user.name}
        </p>
        <p style={{ margin: 0, fontSize: "14px", color: "#777" }}>
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default Card;
