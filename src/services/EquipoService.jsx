import axios from "axios";

const EQUIPO_API_POST_URL =
  "https://springsotorbackend-2-0a0y.onrender.com/api/v1/registro/insertar";

class EquipoService {
  insertarEquipo = async (id_equipo, estado_equipo, codigo) => {
    try {
      const equipo = await axios.post(EQUIPO_API_POST_URL, {
        id_equipo,
        estado_equipo,
        codigo,
      });
      return equipo.data;
    } catch (e) {
      console.error("error", e);
      throw e;
    }
  };
}

export default new EquipoService();
