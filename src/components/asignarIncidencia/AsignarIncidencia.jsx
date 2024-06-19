import { Button, Form, Table } from "react-bootstrap";
import Htopbar from "../global/topbar/Topbar";
import TableIncidencia from "./table/TableIncidencia";
import "bootstrap/dist/css/bootstrap.min.css";

const AsignarIncidencia = () => {
  return (
    <>
      <Htopbar />
      <div className="container mt-5 tw-w-1/3">
        <h1 className="tw-text-center tw-text-4xl tw-font-bold tw-mb-4">
          Asignar Incidencia
        </h1>
        <TableIncidencia />
      </div>
    </>
  );
};

export default AsignarIncidencia;
