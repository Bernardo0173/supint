/**
 *  Author: José Antonio Moreno Tahuilan
 *          Bernardo Limon Montes de Oca
 *          Alfredo Azamar Lopez
 * 
 * Description: This component is the incident panel that contains all the incidents that are reported by the users.
 */

import React, { useState, useEffect, useContext } from 'react';
import io from 'socket.io-client';
import { Accordion } from 'react-bootstrap';
import GlobalContext from '../GlobalVariable/GlobalContext';
import Incident from './Incident';
import '../../styles/mainScreen.css';

const socket = io('http://44.209.22.101');
// const socket = io('http://127.0.0.1:8080');

const IncidentPanel = ({ increment }) => {
  const [inc, setInc] = useState([]);
  const { url, token } = useContext(GlobalContext);

  useEffect(() => {
    fetch(`http://${url}/llamada/infoIncidencias`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => setInc(data));

    socket.on('newIncidencia', (incidencias) => {
      console.log('newIncidence received:', incidencias);
      setInc(incidencias);
    });

    return () => {
      socket.off('newIncidencia');
    };
  }, [url, token]);

  const handleDelete = (id) => {
    setInc((prevInc) => prevInc.filter((incident) => incident.IdReporte !== id));
  };

  return (
    <div className="bottom-section">
      {inc.length === 0 ? (
        <p>No hay reportes de incidencias por el momento</p>
      ) : (
        <Accordion>
          {inc.map((incident) => (
            <Incident
              key={incident.IdReporte}
              zone={incident.NombreZona}
              description={incident.Descripcion}
              eventKey={incident.IdReporte.toString()}
              type={incident.NombreIncidencia}
              priority={incident.Prioridad}
              onDelete={() => handleDelete(incident.IdReporte)}
            />
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default IncidentPanel;
