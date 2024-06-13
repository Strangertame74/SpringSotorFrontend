import axios from "axios";

const REGISTRO_API_POST_URL =
  "https://springsotorbackend-2-0a0y.onrender.com/api/v1/registro/insertar";

class RegistroService {
  insertarRegistro = async (idusuario, idincidencia) => {
    try {
      const registro = await axios.post(REGISTRO_API_POST_URL, {
        idusuario,
        idincidencia,
      });
      return registro.data;
    } catch (e) {
      console.error("error", e);
      throw e;
    }
  };
}

export default new RegistroService();
