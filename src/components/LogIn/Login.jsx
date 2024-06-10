import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import giphy from "../../elements/pinkdots.gif";
import logo from "../../elements/izziN.png";
import { useLogInContext } from "../GlobalVariable/LogInContext";
import GlobalContext from "../GlobalVariable/GlobalContext";

const Login = () => {

  const [agent, agentData,] = useLogInContext();

  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);

  //Posiblemente cambiar estos
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorAut, setErrorAut] = useState(false);

  const { url, token, setToken } = useContext(GlobalContext);

  useEffect(() => {
    setTimeout(() => {
      setShowLogin(true);
    }, 2000);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setGifLoaded(true);
    };
    img.src = giphy;
  }, []);

  // useEffect( () => {
  //   // Aquí va lo de verificación
  //   navigate("/window");
  // }, [agent.Nombre])

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("INCIANDO SESION");
      const datos = {
        email: username,
        password: password,
      }
      let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      }
      // let res = await fetch("http://localhost:8080/auth/signin", config)
      let res = await fetch(`http://${url}/auth/signin`, config)

      if (!res.ok) {
        setErrorAut(true)
        throw new Error('La solicitud no pudo completarse con éxito');
      }

      const data = await res.json();
      console.log(data)
      setToken(data.token.AccessToken);

      agentData({IdEmpleado: data.user.IdEmpleado, Nombre: data.user.Nombre, ApellidoP: data.user.ApellidoP, ApellidoM: data.user.ApellidoM});
      navigate("/window");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="login-container">
      <img
        src={giphy}
        alt="Gif de fondo"
        className={`background-gif ${gifLoaded ? "visible" : ""}`}
      />
      <div
        className={`background-overlay ${
          showLogin && gifLoaded ? "blurred" : ""
        }`}
      ></div>
      <div className={`login-form ${showLogin && gifLoaded ? "visible" : ""}`}>
        <h2 className="title">Bienvenido</h2>
        <div>
          <img className="logo" src={logo} alt="logoIzziConnect"></img>
        </div>
        <p className="txt">Ingrese sus credenciales para accesar.</p>
        {errorAut && <p className="error">Usuario o contraseña incorrectos</p>}
        <div className="formdiv">
          <form className="form" align="center" onSubmit={handleLogin}>
            <input
              className="input"
              type="email"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={!showLogin || !gifLoaded}
            />
            <input
              className="input"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!showLogin || !gifLoaded}
            />
            <button
              className="button"
              type="submit"
              disabled={!showLogin || !gifLoaded}
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
