/**
 * Author: José Antonio Moreno Tahuilan
 *         Bernardo Limon Montes de Oca
 *         Eric Manuel Navarro Martínez
 * 
 * Description: This component is the main screen of the application. It contains the header, the cards 
 * zone, the right panel with the incidents and graphics tabs, and the content section that changes depending 
 * on the active tab.
 */

import React, { useState } from 'react';
import Header from './Header/Header';
import ChartContainer from './StatisticsSection/ChartContainer';
import IncidentPanel from './IncidentSection/IncidentPanel';
import CardsContainer from './AgentSection/CardsContainer';
import '../styles/mainScreen.css';
import '../styles/emotionalStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const MainScreen = () => {
  const [activeTab, setActiveTab] = useState('graphics');

  return (
    <div className="main-container mt-4">
      {/* Show the header and the cards zone */}
      <Header />
      <CardsContainer />
      <div className="right-panel ps-5 pe-4">
        <div className="button-group">
          {/* Show the tabs to switch between incidents and graphics */}
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue={2}
            onChange={(val) => setActiveTab(val === 1 ? 'incidents' : 'graphics')}
            className="w-100"
          >
            <ToggleButton id="tbg-radio-1" value={1} className="tab-button" variant="light">
              Incidencias
            </ToggleButton>
            <ToggleButton id="tbg-radio-2" value={2} className="tab-button" variant="light">
              Gráficas
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className="content-section">
          {activeTab === 'incidents' ? (
            <IncidentPanel />
          ) : (
            <div className="top-section">
              <ChartContainer />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;