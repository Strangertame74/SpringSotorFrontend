import React from "react";
import { Table } from "react-bootstrap";
import Htopbar from "../Htopbar";
const DisponibilidadDeTecnicos = () => {
  return (
    <>
      <Htopbar />
      <div className="container mt-5">
        <h1 className="mb-4 tw-text-center tw-text-4xl tw-font-bold">
          Disponibilidad de Técnicos
        </h1>
        <h4 className="mb-4 tw-font-semibold tw-text-xl">Técnicos Ocupados</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Técnico</th>
              <th>Fecha Inicio</th>
              <th>Código Equipo</th>
              <th>Área</th>
              <th>Gravedad</th>
              <th>Nro de Incidencia</th>
              <th>Más Información</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Juan Pérez</td>
              <td>2024-06-15</td>
              <td>EQP001</td>
              <td>Producción</td>
              <td>Alta</td>
              <td>INC001</td>
              <td>
                <button className="btn btn-info">Ver Detalles</button>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Maria González</td>
              <td>2024-06-16</td>
              <td>EQP002</td>
              <td>Mantenimiento</td>
              <td>Media</td>
              <td>INC002</td>
              <td>
                <button className="btn btn-info">Ver Detalles</button>
              </td>
            </tr>
          </tbody>
        </Table>
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
            <tr>
              <td>1</td>
              <td>TEC001</td>
              <td>Experto</td>
              <td>25</td>
              <td>4.5</td>
              <td>
                <button className="btn btn-info">Ver Detalles</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>TEC002</td>
              <td>Regular</td>
              <td>12</td>
              <td>3.8</td>
              <td>
                <button className="btn btn-info">Ver Detalles</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default DisponibilidadDeTecnicos;
