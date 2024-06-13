import axios from "axios";
const TECNICO_API_URL =
  "https://springsotorbackend-2-0a0y.onrender.com/api/v1/tecnico/listar";
class TecnicoService {
  listarTecnicos = async () => {
    try {
      const tecnico = await axios.get(TECNICO_API_URL);
      console.log(tecnico);
      return tecnico;
    } catch (e) {
      console.error("error", e);
    }
  };
}

export default new TecnicoService();
