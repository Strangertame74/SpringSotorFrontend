import { Button, Form, Table } from "react-bootstrap";
import Htopbar from "../Htopbar";
import { useEffect, useState } from "react";
import IncidenciaService from "../../services/IncidenciaService";

const AsignarIncidencia = () => {
  const [incidencias, setIncidencias] = useState([]);

  useEffect(() => {
    IncidenciaService.listarIncidencias()
      .then((response) => {
        setIncidencias(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Htopbar />
      <div className="container mt-5 tw-w-1/3">
        <h1 className="tw-text-center tw-text-4xl tw-font-bold tw-mb-4">
          Asignar Incidencia
        </h1>

        <div className="mb-4">
          <h2 className="mb-4 tw-font-semibold tw-text-xl">Incidencia</h2>
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Área Afectada</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Id Equipo</th>
                <th>Equipo Afectado </th>
                <th>Código del Equipo</th>
              </tr>
            </thead>
            <tbody>
              {incidencias.length > 0 ? (
                incidencias?.map((incidencia) => (
                  <tr key={incidencia.id_incidencia}>
                    <td>{incidencia.id_incidencia}</td>
                    <td>{incidencia.area_afectada}</td>
                    <td>{incidencia.descripcion}</td>
                    <td>{incidencia.fecha_incidencia}</td>
                    <td>{incidencia.hora_incidencia}</td>
                    <td>{incidencia.equipo_afectado.id_equipo}</td>
                    <td>{incidencia.equipo_afectado.estado_equipo}</td>
                    <td>{incidencia.equipo_afectado.codigo}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No hay incidencias disponibles.</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>

        <div>
          <h2 className="mb-4 tw-font-semibold tw-text-xl">Asignar Técnico</h2>
          <Form>
            <Form.Group className="mb-3 tw-flex" controlId="codigoTecnico">
              <Form.Label>Código del Técnico:</Form.Label>
              <Form.Control type="text" />
              <Button variant="dark" className="ms-2">
                Ver disponibilidad
              </Button>
            </Form.Group>

            <Form.Group className="mb-3" controlId="apellidoPaterno">
              <Form.Label>Apellido Paterno:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="apellidoMaterno">
              <Form.Label>Apellido Materno:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="nombres">
              <Form.Label>Nombres:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="experiencia">
              <Form.Label>Experiencia:</Form.Label>
              <Form.Select>
                <option value="experto">Experto</option>
                <option value="regular">Regular</option>
              </Form.Select>
            </Form.Group>

            <Button variant="danger" className="me-2">
              Asignar
            </Button>
            <Button variant="dark">Cerrar</Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AsignarIncidencia;
