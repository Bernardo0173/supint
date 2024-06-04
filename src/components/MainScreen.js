import "../styles/emotionalStyles.css";
import React, { useState } from "react";
import "../styles/mainScreen.css"; // Asegúrate de tener este archivo CSS en la misma carpeta
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ValInc from './ValInc';
import Header from "./Header";
import Redesign from "./Redesign";
import GrafCard from "./GrafCard";
import PanelInc from "./PanelInc";
import CardsContainer from "./CardsContainer";


const MainScreen = () => {
  const agents = [
    { name: "Pitufino Azamar", client: "Benny Gonzáles", callTime: "0.53", problemsSolved: 3, description: "The client description problem. This text come from de IVR", style: "fine" },
    { name: "Lucia Peralta", client: "Mario Juárez", callTime: "0.45", problemsSolved: 5, description: "Difficulty logging into the platform. Details from user feedback.", style: "resting" },
    { name: "Jorge Sánchez", client: "Lorena Castillo", callTime: "2.15", problemsSolved: 1, description: "Inquiry about product features. Data extracted from support chat.", style: "warning" },
    { name: "Sofía Cruz", client: "Fernando Limón", callTime: "1.58", problemsSolved: 4, description: "Problems with software installation. Info from technical support call.", style: "danger" },
    { name: "Pitufino Azamar", client: "Benny Gonzáles", callTime: "0.53", problemsSolved: 3, description: "The client description problem. This text come from de IVR", style: "fine" },
    { name: "Lucia Peralta", client: "Mario Juárez", callTime: "0.45", problemsSolved: 5, description: "Difficulty logging into the platform. Details from user feedback.", style: "resting" },
    { name: "Jorge Sánchez", client: "Lorena Castillo", callTime: "2.15", problemsSolved: 1, description: "Inquiry about product features. Data extracted from support chat.", style: "warning" },
    { name: "Sofía Cruz", client: "Fernando Limón", callTime: "1.58", problemsSolved: 4, description: "Problems with software installation. Info from technical support call.", style: "danger" },
    { name: "Pitufino Azamar", client: "Benny Gonzáles", callTime: "0.53", problemsSolved: 3, description: "The client description problem. This text come from de IVR", style: "fine" },
    { name: "Lucia Peralta", client: "Mario Juárez", callTime: "0.45", problemsSolved: 5, description: "Difficulty logging into the platform. Details from user feedback.", style: "resting" },
    { name: "Jorge Sánchez", client: "Lorena Castillo", callTime: "2.15", problemsSolved: 1, description: "Inquiry about product features. Data extracted from support chat.", style: "warning" },
    { name: "Sofía Cruz", client: "Fernando Limón", callTime: "1.58", problemsSolved: 4, description: "Problems with software installation. Info from technical support call.", style: "danger" },
    { name: "Lucia Peralta", client: "Mario Juárez", callTime: "0.45", problemsSolved: 5, description: "Difficulty logging into the platform. Details from user feedback.", style: "resting" },
    { name: "Jorge Sánchez", client: "Lorena Castillo", callTime: "2.15", problemsSolved: 1, description: "Inquiry about product features. Data extracted from support chat.", style: "warning" },
    { name: "Sofía Cruz", client: "Fernando Limón", callTime: "1.58", problemsSolved: 4, description: "Problems with software installation. Info from technical support call.", style: "danger" },
    { name: "Lucia Peralta", client: "Mario Juárez", callTime: "0.45", problemsSolved: 5, description: "Difficulty logging into the platform. Details from user feedback.", style: "resting" },
    { name: "Jorge Sánchez", client: "Lorena Castillo", callTime: "2.15", problemsSolved: 1, description: "Inquiry about product features. Data extracted from support chat.", style: "warning" },
    { name: "Sofía Cruz", client: "Fernando Limón", callTime: "1.58", problemsSolved: 4, description: "Problems with software installation. Info from technical support call.", style: "danger" },
  ];

  const initialInc = [
    { id: 0, tipoIncidencia: "Robo de cable", zona: "1", desc: "Se robaron el cable a las 14 horas" },
    { id: 1, tipoIncidencia: "Vandalismo", zona: "2", desc: "Vandalizaron el cable y necesita reposición" },
  ];

  const [inc, setInc] = useState(initialInc);
  const [activeTab, setActiveTab] = useState("graficas");

  const handleDelete = (id) => {
    setInc(inc.filter(incidencia => incidencia.id !== id));
  };

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
