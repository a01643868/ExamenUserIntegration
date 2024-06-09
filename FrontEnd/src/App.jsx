import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./views/dashboard/Dashboard";
import Register from "./views/register/Register";
import Users from "./views/users/Users";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/users/:id" element={<Users />} />
    </Routes>
  );
}

export default App;
