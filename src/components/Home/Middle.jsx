import React from "react";
import asignarIn from "../../assets/asignarIn.jpg";
import diccionario from "../../assets/diccionario.jpg";
import reportar from "../../assets/reportar.jpg";
import tecnico from "../../assets/tecnico.png";
import { Link } from "react-router-dom";
const Middle = () => {
  return (
    <div className="tw-container tw-mx-auto tw-mt-20">
      <div className="tw-grid tw-grid-cols-2 tw-place-items-center">
        <div className="tw-size-96 tw-cursor tw-flex tw-flex-col tw-items-center ">
          <Link
            to="/asignar-incidencia"
            className="tw-size-96 tw-cursor-pointer tw-flex tw-justify-center tw-items-center"
          >
            <img src={asignarIn} className="tw-size-72 hover:tw-scale-105" />
          </Link>
          <div className="tw-font-semibold tw-text-xl">Asignar Incidencia</div>
        </div>
        <div className="tw-size-96 tw-cursor tw-flex tw-flex-col tw-items-center ">
          <Link
            to="/historial-de-fallas"
            className="tw-size-96 tw-cursor-pointer tw-flex tw-justify-center tw-items-center"
          >
            <img src={diccionario} className="tw-size-72 hover:tw-scale-105" />
          </Link>
          <div className="tw-font-semibold tw-text-xl">
            Historial de Fallas{" "}
          </div>
        </div>

        <div className="tw-size-96 tw-cursor tw-flex tw-flex-col tw-items-center ">
          <Link
            to="/reportar-incidencia"
            className="tw-size-96 tw-cursor-pointer tw-flex tw-justify-center tw-items-center"
          >
            <img
              src={reportar}
              alt="Reportar"
              className="tw-size-72 hover:tw-scale-105"
            />
          </Link>
          <div className="tw-font-semibold tw-text-xl">
            Reportar Incidencias
          </div>
        </div>
        <div className="tw-size-96 tw-cursor tw-flex tw-flex-col tw-items-center ">
          <Link
            to="/disponibilidad-de-tecnicos"
            className="tw-size-96 tw-cursor-pointer tw-flex tw-justify-center tw-items-center"
          >
            <img src={tecnico} className="tw-size-72 hover:tw-scale-105" />
          </Link>
          <div className="tw-font-semibold tw-text-xl">
            Disponibilidad de Técnicos
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
