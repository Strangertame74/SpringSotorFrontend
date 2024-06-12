import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Htopbar from "../Htopbar";
const ReportarIncidencia = () => {
  return (
    <>
      <Htopbar />
      <div className="tw-bg-white">
        <Container className="mt-5">
          <h1 className="tw-text-center tw-text-4xl tw-font-bold tw-mb-4">
            Reportar Incidencia
          </h1>
          <h2 className="mb-4 tw-font-semibold tw-text-xl">
            Usuario responsable del equipo
          </h2>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEquipoCodigo">
                <Form.Label>Código de Equipo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese código de equipo"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formApellidoPaterno">
                <Form.Label>Apellido Paterno</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese apellido paterno"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formApellidoMaterno">
                <Form.Label>Apellido Materno</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese apellido materno"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formNombres">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="text" placeholder="Ingrese nombres" />
              </Form.Group>

              <Form.Group as={Col} controlId="formUsuarioAfectado">
                <Form.Label>Usuario Afectado</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese usuario afectado"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" placeholder="Ingrese teléfono" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formCorreoElectronico">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese correo electrónico"
                />
              </Form.Group>
            </Row>

            <h2 className="mb-4 tw-font-semibold tw-text-xl">
              Descripción del incidente
            </h2>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formAreaAfectada">
                <Form.Label>Área Afectada</Form.Label>
                <Form.Control type="text" placeholder="Ingrese área afectada" />
              </Form.Group>

              <Form.Group as={Col} controlId="formFecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formCodigoMaquina">
                <Form.Label>Código de Máquina</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese código de máquina"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formHora">
                <Form.Label>Hora</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formDescripcionIncidente">
                <Form.Label className="tw-font-semibold tw-text-xl">
                  Escriba detalladamente el incidente
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Describa el incidente"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFotoIncidente">
                <Form.Label className="tw-font-semibold tw-text-xl">
                  Subir foto
                </Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formVeracidad">
              <Form.Check
                type="checkbox"
                label="Aseguro que toda la información brindada es verídica"
              />
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Button variant="danger" type="submit" className="w-100">
                  Reportar
                </Button>
              </Col>
              <Col>
                <Button variant="dark" type="button" className="w-100">
                  Cerrar
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default ReportarIncidencia;
