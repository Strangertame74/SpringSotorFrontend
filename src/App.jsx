import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import ReportarIncidencia from "./components/Home/reportarIncidencia/ReportarIncidencia";
import AsignarIncidencia from "./components/Home/asignarIncidencia/AsignarIncidencia";

import DisponibilidadDeTecnicos from "./components/Home/disponibilidaddetecnicos/DisponibilidadDeTecnicos";
import HistorialDeFallas from "./components/Home/diccionariodefallas/HistorialDeFallas";
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
      </Routes>
    </>
  );
}

export default App;
