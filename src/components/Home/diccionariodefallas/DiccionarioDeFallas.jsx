import React from "react";
import { Button, Form, Table } from "react-bootstrap"; // Importar Button, Form y Table de react-bootstrap
import Htopbar from "../Htopbar";
const DiccionarioDeFallas = () => {
  return (
    <>
      <Htopbar />
      <div className="container mt-5 tw-w-2/5">
        <h1 className="mb-4 tw-text-center tw-text-4xl tw-font-bold">
          Diccionario de Fallas
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
              <th>Fecha Primer Reporte</th>
              <th>Solución</th>
              <th>Tiempo promedio</th>
              <th>Máquinas Afectadas</th>
              <th>Gravedad</th>
              <th>Recurrencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Falla en el sistema de alimentación</td>
              <td>2023-05-10</td>
              <td>Reemplazo del transformador de potencia</td>
              <td>2 horas</td>
              <td>EQP-101, EQP-103</td>
              <td>Alta</td>
              <td>Sí</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Pérdida de conexión en red</td>
              <td>2023-06-22</td>
              <td>Reinicio de router y configuración de firewall</td>
              <td>1.5 horas</td>
              <td>EQP-205</td>
              <td>Media</td>
              <td>No</td>
            </tr>
          </tbody>
        </Table>

        <h4 className="mb-4 tw-font-semibold tw-text-xl">
          Incidencias Comunes
        </h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Descripción</th>
              <th>Fecha Primer Reporte</th>
              <th>Solución</th>
              <th>Tiempo promedio</th>
              <th>Máquinas Afectadas</th>
              <th>Gravedad</th>
              <th>Recurrencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Falla en el sistema de iluminación</td>
              <td>2023-06-15</td>
              <td>Cambio de bombillas en la línea principal</td>
              <td>1 hora</td>
              <td>Máquina A, Máquina B</td>
              <td>Baja</td>
              <td>No</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Error de conexión en red</td>
              <td>2023-07-02</td>
              <td>Reconfiguración de router y firewall</td>
              <td>2 horas</td>
              <td>Sala de servidores A</td>
              <td>Alta</td>
              <td>Sí</td>
            </tr>
          </tbody>
        </Table>

        <Button variant="primary">
          Agregar Nueva Incidencia al Diccionario
        </Button>
      </div>
    </>
  );
};

export default DiccionarioDeFallas;
