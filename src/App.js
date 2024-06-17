/**
 * Author: José Antonio Moreno Tahuilan
 *         Bernardo Limon Montes de Oca
 *         Joahan Javier Gracia
 *         Karla Stefania Cruz Muñiz
 * 
 * Description: This component is the have all the routes of the application. It contains the login route and 
 * the main screen route. Also in this script use the ip and the port where the app is going to hear in all the 
 * aplication.
 */

import MainScreen from "./components/MainScreen";
import Login from "./components/LogIn/Login";
import GlobalContext from "./components/GlobalVariable/GlobalContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, 
        Route, 
        Routes } from "react-router-dom";
import ProtectedRoute from "./components/LogIn/ProtectedRoute";
import { useLogInContext } from "./components/GlobalVariable/LogInContext";


function App() {

  const [url,] = useState("44.209.22.101:8080");
  const [token, setToken] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  //const [url, ] = useState("127.0.0.1:8080");
  const [agent,] = useLogInContext();

  return (
    <GlobalContext.Provider value={{ url, token, setToken, title, setTitle, message, setMessage }}>
      <Toaster position="bottom-right" reverseOrder={true} />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<ProtectedRoute isAllowed={!!agent.IdEmpleado}/>}>
              <Route path="/window" element={<MainScreen />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
