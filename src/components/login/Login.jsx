import React from "react";
import loginfoto from "../../assets/loginfoto.jpg"; // Asegúrate de tener esta imagen en el path correcto
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="m-5 text-black card"
        style={{ borderRadius: "1rem", maxWidth: "60%" }}
      >
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={loginfoto}
              alt="login form"
              className="img-fluid rounded-start w-100"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="d-flex flex-column align-items-center">
                <h1 className="pb-1 mt-4 mb-5 font-weight-bold">
                  Iniciar Sesión
                </h1>
              </div>
              <form>
                <div className="mb-4 form-group">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input type="email" id="email" className="form-control" />
                </div>
                <div className="mb-4 form-group">
                  <label htmlFor="password">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <div className="pt-1 pb-1 mb-5 text-center tw-flex tw-flex-col">
                  <button
                    type="button"
                    className="mb-4 btn btn-primary btn-block "
                  >
                    Iniciar Sesión
                  </button>
                  <a className="text-muted" href="#!">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <div className="pb-4 d-flex justify-content-center align-items-center">
                  <p className="mb-0">¿No tienes una cuenta?</p>
                  <a href="/signup" className="mx-2 btn btn-outline-dark">
                    Regístrate
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
