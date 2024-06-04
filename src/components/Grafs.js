import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/grafs.css';
import InfoLlamadas from "./InfoLlamadas";
import InfoCC from "./InfoCC";
import InfoCirculo from "./InfoCirculo";

export default function Grafs() {
  const [llamadasDeHoy, setLlamadasDeHoy] = useState(0);
  const [activeChart, setActiveChart] = useState(0);

  useEffect(() => {
    // Inicialmente cargar datos
    fetch("http://127.0.0.1:8080/llamada/llamadasDeHoy")
      .then((response) => response.json())
      .then((data) => setLlamadasDeHoy(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const labels = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const datasets = [
    {
      label: "Llamadas Atendidas",
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
    },
    {
      label: "Llamadas Perdidas",
      data: [2, 3, 20, 5, 1, 4, 6],
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
  ];

  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button
          type="button"
          className={`btn btn-secondary ${activeChart === 0 ? 'active' : ''}`}
          onClick={() => setActiveChart(0)}
        >
          Información call center
        </button>
        <button
          type="button"
          className={`btn btn-secondary ${activeChart === 1 ? 'active' : ''}`}
          onClick={() => setActiveChart(1)}
        >
          Información de llamadas
        </button>
        <button
          type="button"
          className={`btn btn-secondary ${activeChart === 2 ? 'active' : ''}`}
          onClick={() => setActiveChart(2)}
        >
          Desempeño call center
        </button>
      </div>
      <div className="chart-container" style={{ marginTop: '20px' }}>
        {activeChart === 0 && <InfoCirculo/>}
        {activeChart === 1 && <InfoLlamadas/>}
        {activeChart === 2 && <InfoCC />}
      </div>
    </div>
  );
}
