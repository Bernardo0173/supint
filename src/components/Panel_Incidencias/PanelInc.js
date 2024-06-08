import React, { useState, useEffect, useContext } from "react";
import ValInc from "./ValInc";
import { Accordion } from "react-bootstrap";
import io from "socket.io-client";
import "../../styles/mainScreen.css";
import GlobalContext  from "../GlobalVariable/GlobalContext";


const socket = io("http://44.209.22.101");
//const socket = io("http://127.0.0.1:8080");

const PanelInc = ({ increment }) => {

	const [inc, setInc] = useState([]);
  const { url } = useContext(GlobalContext);

	useEffect(() => {
    //fetch("http://44.209.22.101:8080/llamada/infoIncidencias")
    fetch(`http://${url}/llamada/infoIncidencias`)
      .then((response) => response.json())
      .then((data) => setInc(data));

      // Configurar el socket para escuchar eventos
      socket.on("newIncidencia", (incidencias) => {
        console.log("newIncidence received:", incidencias);
        setInc(incidencias);
      });
  }, []);

  const handleDelete = (id) => {
    setInc(inc.filter((incidencia) => incidencia.id !== id));
  };

  return (
    <div className="bottom-section">
      {inc.length === 0 ? (
        <p>No hay reportes de incidencias por el momento</p>
      ) : (
        <Accordion>
          {inc.map((incidencia) => (
            <ValInc
              zona={incidencia.NombreZona}
              descripcion={incidencia.Descripcion}
              key={incidencia.IdReporte}
              eventKey={incidencia.IdReporte.toString()}
              tipoIncidencia={incidencia.NombreIncidencia}
							nombreIncidencia={incidencia.NombreIncidencia}
							prioridad={incidencia.Prioridad}
              onDelete={() => handleDelete(incidencia.IdReporte)}
            />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default PanelInc;
