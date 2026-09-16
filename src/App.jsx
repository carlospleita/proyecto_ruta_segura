import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Perfil from "./pages/Perfil";
import NoAutorizado from "./pages/NoAutorizado";
import PrivateRoutes from "./routes/PrivateRoutes";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/no-autorizado" element={<NoAutorizado />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
        <Route
          path="/perfil"
          element={
            <PrivateRoutes allowedRoles={["admin"]}>
              <Perfil />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}