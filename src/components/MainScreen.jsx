import "../styles/emotionalStyles.css";
import React, { useState } from "react";
import "../styles/mainScreen.css"; // Asegúrate de tener este archivo CSS en la misma carpeta
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Header from "./Header/Header";
import GrafCard from "./Graficas/GrafCard";
import PanelInc from "./Panel_Incidencias/PanelInc";
import CardsContainer from "./CardsContainer/CardsContainer";


const MainScreen = () => {

  const initialInc = [
    { id: 0, tipoIncidencia: "Robo de cable", zona: "1", desc: "Se robaron el cable a las 14 horas" },
    { id: 1, tipoIncidencia: "Vandalismo", zona: "2", desc: "Vandalizaron el cable y necesita reposición" },
  ];

  const [inc, setInc] = useState(initialInc);
  const [activeTab, setActiveTab] = useState("graficas");

  return (
    <div className="main-container">
      <Header />
      <CardsContainer />
      <div className="right-panel">
        <div className="button-group">
          <ToggleButtonGroup type="radio" name="options" defaultValue={2} onChange={(val) => setActiveTab(val === 1 ? "incidencias" : "graficas")} className="w-100">
            <ToggleButton id="tbg-radio-1" value={1} className="tab-button">
              Incidencias
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2} className="tab-button">
              Gráficas
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="content-section">
          {activeTab === "incidencias" ? (
            <PanelInc />
          ) : (
            <div className="top-section">
              <GrafCard/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
