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
        <Link to="/asignar-incidencia" className="tw-size-96 tw-cursor-pointer">
          <img src={asignarIn} />
        </Link>

        <Link
          to="/diccionario-de-fallas"
          className="tw-size-96 tw-cursor-pointer"
        >
          <img src={diccionario} />
        </Link>
        <Link
          to="/reportar-incidencia"
          className="tw-size-96 tw-cursor-pointer"
        >
          <img src={reportar} alt="Reportar" />
        </Link>
        <Link
          to="/disponibilidad-de-tecnicos"
          className="tw-size-96 tw-flex tw-items-center tw-justify-center tw-cursor-pointer"
        >
          <img className="" src={tecnico} />
        </Link>
      </div>
    </div>
  );
};

export default Middle;
