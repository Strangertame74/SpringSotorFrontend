import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import ReportarIncidencia from "./components/reportarIncidencia/ReportarIncidencia";
import AsignarIncidencia from "./components/asignarIncidencia/AsignarIncidencia";

import DisponibilidadDeTecnicos from "./components/disponibilidaddetecnicos/DisponibilidadDeTecnicos";
import HistorialDeFallas from "./components/HistorialDeFallas/HistorialDeFallas";
import AsignarTecnico from "./components/asignarIncidencia/asignarTecnico/AsignarTecnico";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reportar-incidencia" element={<ReportarIncidencia />} />
        <Route path="/asignar-incidencia" element={<AsignarIncidencia />} />
        <Route path="/historial-de-fallas" element={<HistorialDeFallas />} />
        <Route
          path="/disponibilidad-de-tecnicos"
          element={<DisponibilidadDeTecnicos />}
        />
        <Route path="/asignar-tecnico" element={<AsignarTecnico />} />
      </Routes>
    </>
  );
}

export default App;
