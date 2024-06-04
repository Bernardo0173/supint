import "./App.css";
import MainScreen from "./components/MainScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContext from './components/GlobalVariable/GlobalContext';
import React, { useState } from 'react';

function App() {
  const [url, _] = useState('127.0.0.1:8080');

  return (
    <GlobalContext.Provider value={{ url }}
    
    >
      <div className="App">    
        <MainScreen/>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
