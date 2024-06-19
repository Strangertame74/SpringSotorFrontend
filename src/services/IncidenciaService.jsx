import axios from "axios";
const INCIDENCIA_API_URL =
  "https://springsotorbackend-2-0a0y.onrender.com/api/v1/incidencia/listar";
class IncidenciaService {
  listarIncidencias = async () => {
    try {
      const incidencias = await axios.get(INCIDENCIA_API_URL);
      console.log(incidencias);
      return incidencias;
    } catch (e) {
      console.error("error", e);
    }
  };
}

export default new IncidenciaService();
