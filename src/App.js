import "./App.css";
import MainScreen from "./components/MainScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalContext from "./components/GlobalVariable/GlobalContext";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa BrowserRouter
import Login from "./components/LogIn/Login";
import { useLogInContext } from "./components/GlobalVariable/LogInContext";

function App() {

  const [agent,] = useLogInContext();
  const [url,] = useState("44.209.22.101:8080");
  const [token, setToken] = useState("");
  const [titulo, setTitulo] = useState("");
  const [mensaje, setMensaje] = useState("");
  //const [url, _] = useState("127.0.0.1:8080");

  return (
    <GlobalContext.Provider value={{ url, token, setToken, titulo, setTitulo, mensaje, setMensaje }}>
      <Toaster position="bottom-right" reverseOrder={true} />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/window" element={<MainScreen />} />
          </Routes>
        </div>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
