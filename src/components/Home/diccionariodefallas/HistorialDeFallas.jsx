import React from "react";
import { Button, Form, Table } from "react-bootstrap"; // Importar Button, Form y Table de react-bootstrap
import Htopbar from "../Htopbar";
import InformeTecnicoService from "../../services/InformeTecnicoService";
import { useState, useEffect } from "react";
const HistorialDeFallas = () => {
  const [informeTecnico, setInformeTecnico] = useState([]);

  useEffect(() => {
    InformeTecnicoService.listarinformeTecnicos()
      .then((response) => {
        setInformeTecnico(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Htopbar />
      <div className="container mt-5 tw-w-2/5">
        <h1 className="mb-4 tw-text-center tw-text-4xl tw-font-bold">
          Historial de Fallas
        </h1>

        <Form className="mb-4">
          <Form.Group controlId="busqueda">
            <Form.Control
              type="text"
              placeholder="Busca alguna falla conocida..."
            />
          </Form.Group>
        </Form>

        <h4 className="mb-4 tw-font-semibold tw-text-xl">
          Coincidencias Encontradas
        </h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Descripción</th>
              <th>Solución</th>
              <th>Fecha de Registro</th>
              <th>Gravedad</th>
              <th>Tiempo de Resolución</th>
              <th>Id Técnico</th>
              <th>Id Equipo</th>
            </tr>
          </thead>
          <tbody>
            {informeTecnico?.map((informe) => (
              <tr key={informe.id_informe}>
                <td>{informe.id_informe}</td>
                <td>{informe.registro.incidencia.descripcion}</td>
                <td>{informe.solucion}</td>
                <td>{informe.fecha_registro_informe}</td>
                <td>{informe.gravedad}</td>
                <td>{informe.tiempo_horas}</td>
                <td>{informe.tecnico.id_tecnico}</td>
                <td>{informe.registro.incidencia.idequipo}</td>
                <td>
                  <button className="btn btn-info">Ver Detalles</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button variant="primary" className="tw-mb-8">
          Agregar Nuevo Informe
        </Button>
      </div>
    </>
  );
};

export default HistorialDeFallas;
