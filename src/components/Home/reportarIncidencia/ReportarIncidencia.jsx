import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Htopbar from "../Htopbar";
import { useState } from "react";
import RegistroService from "../../services/RegistroService";
const ReportarIncidencia = () => {
  const [idIncidencia, setIncidencia] = useState("");
  const [paterno, setPaterno] = useState("");
  const [materno, setMaterno] = useState("");
  const [nombres, setNombres] = useState("");
  const [idUsuario, setIdUsuario] = useState("");
  const [telefono, setTelefono] = useState("");
  const [areaAfectada, setAreaAfectada] = useState("");
  const [fecha, setFecha] = useState("");
  const [codigoMaquina, setCodigoMaquina] = useState("");
  const [hora, setHora] = useState("");
  const [detalleIncidente, setDetalleIncidente] = useState("");
  const [correo, setCorreo] = useState("");
  const [veracidad, setVeracidad] = useState(false);
  const [imagen, setImagen] = useState("");
  const handleReport = async (e) => {
    e.preventDefault();
    if (!veracidad) {
      console.log(
        "Debe asegurarse de que toda la información brindada es verídica."
      );
      return;
    }
    RegistroService.insertarRegistro();
    const reporte = {
      idIncidencia,
      paterno,
      materno,
      nombres,
      idUsuario,
      telefono,
      areaAfectada,
      fecha,
      codigoMaquina,
      hora,
      detalleIncidente,
      correo,
      imagen,
      veracidad,
    };
    console.log(reporte);

    try {
      const registro = await RegistroService.insertarRegistro(
        idUsuario,
        idIncidencia
      );
      console.log("Registro creado:", registro);
    } catch (e) {
      console.error("Hubo un problema al intentar insertar el registro");
    }
  };

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
          <Form onSubmit={(e) => handleReport(e)}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEquipoCodigo">
                <Form.Label>Id Incidencia</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese código de equipo"
                  value={idIncidencia}
                  onChange={(e) => setIncidencia(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formApellidoPaterno">
                <Form.Label>Apellido Paterno</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese apellido paterno"
                  value={paterno}
                  onChange={(e) => setPaterno(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formApellidoMaterno">
                <Form.Label>Apellido Materno</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese apellido materno"
                  value={materno}
                  onChange={(e) => setMaterno(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formNombres">
                <Form.Label>Nombres</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese nombres"
                  value={nombres}
                  onChange={(e) => setNombres(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formUsuarioAfectado">
                <Form.Label>Id Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese usuario afectado"
                  value={idUsuario}
                  onChange={(e) => setIdUsuario(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formCorreoElectronico">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese correo electrónico"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </Form.Group>
            </Row>

            <h2 className="mb-4 tw-font-semibold tw-text-xl">
              Descripción del incidente
            </h2>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formAreaAfectada">
                <Form.Label>Área Afectada</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese área afectada"
                  value={areaAfectada}
                  onChange={(e) => setAreaAfectada(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formFecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formCodigoMaquina">
                <Form.Label>Código de Máquina</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese código de máquina"
                  value={codigoMaquina}
                  onChange={(e) => setCodigoMaquina(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formHora">
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="time"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                />
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
                  value={detalleIncidente}
                  onChange={(e) => setDetalleIncidente(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFotoIncidente">
                <Form.Label className="tw-font-semibold tw-text-xl">
                  Subir foto
                </Form.Label>
                <Form.Control
                  type="file"
                  value={imagen}
                  onChange={(e) => setImagen(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formVeracidad">
              <Form.Check
                type="checkbox"
                label="Aseguro que toda la información brindada es verídica"
                checked={veracidad}
                onChange={(e) => setVeracidad(e.target.checked)}
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
