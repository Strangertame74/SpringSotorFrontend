import React from "react";
import { Form, Button } from "react-bootstrap";

const AsignarTecnico = () => {
  return (
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
  );
};

export default AsignarTecnico;
