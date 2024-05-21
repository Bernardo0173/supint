import ValInc from "./ValInc"
import Accordion from "react-bootstrap/Accordion";
import "../styles/mainScreen.css";
import { useState } from "react";

const IncideciasPanel = ({incidencias}) => {

    const initialInc = [
        { id: 0, tipoIncidencia: "Robo de cable" },
        { id: 1, tipoIncidencia: "Vandalismo" },
      ];
    
      const [inc, setInc] = useState(initialInc);
    
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
                  key={incidencia.id}
                  eventKey={incidencia.id.toString()}
                  tipoIncidencia={incidencia.tipoIncidencia}
                  onDelete={() => handleDelete(incidencia.id)}
                />
              ))}
            </Accordion>
          )}
        </div>
    )
}

export default IncideciasPanel;