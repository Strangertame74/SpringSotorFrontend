import React from "react";
import asignarIn from "../../assets/asignarIn.jpg";
import diccionario from "../../assets/diccionario.jpg";
import reportar from "../../assets/reportar.jpg";
import tecnico from "../../assets/tecnico.png";
const Middle = () => {
  return (
    <div className="tw-container tw-mx-auto tw-mt-20">
      <div className="tw-grid tw-grid-cols-2 tw-place-items-center">
        <div className="tw-size-96 tw-cursor-pointer">
          <img src={asignarIn} />
        </div>
        <div className="tw-size-96 tw-cursor-pointer">
          <img src={diccionario} />
        </div>
        <div className="tw-size-96 tw-cursor-pointer">
          <img src={reportar} />
        </div>
        <div className="tw-size-96 tw-flex tw-items-center tw-justify-center tw-cursor-pointer">
          <img className="" src={tecnico} />
        </div>
      </div>
    </div>
  );
};

export default Middle;
