import { Table } from "react-bootstrap";
import Htopbar from "../global/topbar/Topbar";
import TecnicoService from "../../services/TecnicoService";
import { useState, useEffect } from "react";
const DisponibilidadDeTecnicos = () => {
  const [tecnicos, setTecnicos] = useState([]);
  useEffect(() => {
    TecnicoService.listarTecnicos()
      .then((response) => {
        setTecnicos(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  //posiblemente luego usemos el useState para que se renderize al momento de que cambien las variables xd
  const tecnicosDisponibles = tecnicos.filter(
    (tecnico) => tecnico.disponibilidad
  );
  const tecnicosOcupados = tecnicos.filter(
    (tecnico) => !tecnico.disponibilidad
  );
  return (
    <>
      <Htopbar />
      <div className="container mt-5">
        <h1 className="mb-4 tw-text-center tw-text-4xl tw-font-bold">
          Disponibilidad de Técnicos
        </h1>
        <h4 className="mb-4 tw-font-semibold tw-text-xl">
          Técnicos Disponibles
        </h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Código Técnico</th>
              <th>Experiencia</th>
              <th>Máquinas Arregladas</th>
              <th>Calificación</th>
              <th>Más Información</th>
            </tr>
          </thead>
          <tbody>
            {tecnicosDisponibles.map((tecnico) => (
              <tr key={tecnico.id_tecnico}>
                <td>{tecnico.id_tecnico}</td>
                <td>{tecnico.id_tecnico}</td>
                <td>{tecnico.experiencia}</td>
                <td>{tecnico.id_tecnico}</td>
                <td>{tecnico.experiencia}</td>
                <td>
                  <button className="btn btn-info">Ver Detalles</button>
                  <button className="btn btn-info tw-ml-2 ">
                    Asignar técnico
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default DisponibilidadDeTecnicos;
