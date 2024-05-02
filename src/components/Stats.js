//Genera un componente que muestra las estadísticas del Call Center
//Autor: Benjamín Alejandro Cruz Cervantes
import PromLlamada from "./PromLlamada";
import data from "./data.json";
import PromEmoc from "./PromEmoc";
import TimeCC from "./TimeCC";
import IdealCalls from "./IdealCalls";
import "../styles/stats.css";
import { useState, useRef, useEffect } from "react";
import { createChart } from "lightweight-charts";
import { Modal, Button } from "react-bootstrap";

const CallsChart = ({ data }) => {
  const chartContainerRef = useRef();

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
    });
    const lineSeries = chart.addLineSeries();

    // Aquí puedes agregar datos a tu serie de líneas, por ejemplo:
    lineSeries.setData(data);

    return () => chart.remove();
  }, [data]);

  return (
    <div ref={chartContainerRef} style={{ width: "100%", height: "500px" }} />
  );
};

const Stats = () => {
  const [showModal, setShowModal] = useState(false);

  const fakeCalls = [
    { duration: 1 },
    { duration: 3 },
    { duration: 2 },
    { duration: 5 },
    { duration: 1 },
  ];

  const avgEmoc = [
    { emotion: 55 },
    { emotion: 63 },
    { emotion: 69 },
    { emotion: 88 },
    { emotion: 94 },
  ];

  const timeCC = [
    { time: 6 },
    { time: 9 },
    { time: 16 },
    { time: 18 },
    { time: 25 },
  ];

  return (
    <div className="stats">
      <div className="button-row">
        <button
          className="kpi-button"
          variant="contained"
          color="transparent"
          onClick={() => setShowModal(true)}
        >
          Tiempo promedio de cada llamada:
          <PromLlamada calls={fakeCalls} />
        </button>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Tiempo de llamadas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CallsChart data={data} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
        <button className="kpi-button" variant="contained" color="primary">
          Promedio de emociones por llamada:
          <PromEmoc emoc={avgEmoc} />
        </button>
      </div>
      <div className="button-row">
        <button className="kpi-button" variant="contained" color="primary">
          Tiempo productivo del Call Center:
          <TimeCC timeCallCenter={timeCC} />
        </button>

        <button className="kpi-button" variant="contained" color="primary">
          % de llamadas en tiempo ideal (1 min):
          <IdealCalls calls={fakeCalls} />
        </button>
      </div>
    </div>
  );
};

export default Stats;
