import React from "react";
import useIncidenciaStore from "../../../datos/IncidenciaStore";
import { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TableIncidencia = () => {
  const { incidencias, fetchIncidencias } = useIncidenciaStore();
  useEffect(() => {
    fetchIncidencias();
  }, []);

  return (
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
            <th>Asignar Tecnico</th>
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
                <td>{incidencia.equipo_afectado?.id_equipo}</td>
                <td>{incidencia.equipo_afectado?.estado_equipo}</td>
                <td>{incidencia.equipo_afectado?.codigo}</td>
                <td>
                  <Link to={"/disponibilidad-de-tecnicos"}>
                    <Button>+</Button>
                  </Link>
                </td>
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
  );
};

export default TableIncidencia;
