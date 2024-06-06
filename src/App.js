import "./App.css";
import MainScreen from "./components/MainScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContext from "./components/GlobalVariable/GlobalContext";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [url, _] = useState("44.209.22.101:8080");

  return (
    <GlobalContext.Provider value={{ url }}>
      <div className="App">
        <Toaster position="top-left" reverseOrder={true} />
        <MainScreen />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
