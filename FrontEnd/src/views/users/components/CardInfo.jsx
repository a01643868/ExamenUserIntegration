import usercoffee from "../../../assets/usercoffee.svg";

const CardInfo = ({ user }) => {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        backgroundColor: "white",
        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <img
        src={usercoffee}
        alt="user"
        style={{ width: "100px", height: "100px", marginBottom: "20px" }}
      />
      <p style={{ margin: "5px 0", fontWeight: "bold" }}>Nombre</p>
      <p style={{ margin: "5px 0" }}>{user.name}</p>
      <p style={{ margin: "5px 0", fontWeight: "bold" }}>Email</p>
      <p style={{ margin: "5px 0" }}>{user.email}</p>
      <p style={{ margin: "5px 0", fontWeight: "bold" }}>Age</p>
      <p style={{ margin: "5px 0" }}>{user.age}</p>
      <p style={{ margin: "5px 0", fontWeight: "bold" }}>Country</p>
      <p style={{ margin: "5px 0" }}>{user.pais}</p>
    </div>
  );
};

export default CardInfo;
