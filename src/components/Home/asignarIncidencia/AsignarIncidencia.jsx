import React from "react";
import { Button, Form } from "react-bootstrap"; // Importar Button y Form de react-bootstrap
import Htopbar from "../Htopbar";

const AsignarIncidencia = () => {
  return (
    <>
      <Htopbar />
      <div className="container mt-5 tw-w-1/3">
        <h1 className="tw-text-center tw-text-4xl tw-font-bold tw-mb-4">
          Asignar Incidencia
        </h1>

        <div className="mb-4">
          <h2 className="mb-4 tw-font-semibold tw-text-xl">Incidencia</h2>
          <p>
            Aquí van los detalles de la incidencia que el usuario ha llenado:
          </p>

          <div className="mb-3">
            <p>Detalles de la incidencia:</p>
          </div>

          <div className="mb-3">
            <p>Imagen de la incidencia:</p>
          </div>
        </div>

        <div>
          <h2 className="mb-4 tw-font-semibold tw-text-xl">Asignar Técnico</h2>
          <Form>
            <Form.Group className="mb-3 tw-flex " controlId="codigoTecnico">
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
