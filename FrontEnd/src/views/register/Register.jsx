import Forms from "./components/Forms";
import form from "../../assets/form.svg";
import NavigationBar from "../../shared/NavigationBar";

const Register = () => {
  return (
    <NavigationBar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "50px",
        }}
      >
        <div style={{ maxWidth: "50%" }}>
          <img
            src={form}
            alt="formImage"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <div style={{ width: "400px" }}>
          <Forms />
        </div>
      </div>
    </NavigationBar>
  );
};
export default Register;
