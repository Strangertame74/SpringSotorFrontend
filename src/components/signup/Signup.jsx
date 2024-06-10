import React from "react";
import loginfoto from "../../assets/loginfoto.jpg";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center vh-100 gradient-form"
    >
      <MDBCard
        className="m-5 text-black"
        style={{ borderRadius: "1rem", maxWidth: "60%" }}
      >
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src={loginfoto}
              alt="login form"
              className="rounded-start w-100"
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column justify-content-center">
              <div className="d-flex flex-column align-items-center">
                <h1 className="pb-1 mt-4 mb-5 tw-font-bold tw-text-4xl">
                  Crea tu cuenta ahora
                </h1>
              </div>
              <MDBInput
                wrapperClass="mb-4"
                label="Correo Electrónico"
                id="form1"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Contraseña"
                id="form2"
                type="password"
              />

              <div className="pt-1 pb-1 mb-5 text-center">
                <MDBBtn className="mb-4 w-100 gradient-custom-2">
                  Iniciar Sesión
                </MDBBtn>
                <a className="text-muted" href="#!">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
