import axios from "axios";
const INFORMETECNICO_API_URL =
  "https://springsotorbackend-2-0a0y.onrender.com/api/v1/informe_tecnico/listar";
class InformeTecnicoService {
  listarinformeTecnicos = async () => {
    try {
      const informeTecnico = await axios.get(INFORMETECNICO_API_URL);
      console.log(informeTecnico);
      return informeTecnico;
    } catch (e) {
      console.error("error", e);
    }
  };
}

export default new InformeTecnicoService();
