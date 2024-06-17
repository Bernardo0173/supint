/**
 * Author: José Antonio Moreno Tahuilan
 *         Karla Stefania Cruz Muñiz
 *         Joahan Javier Gracia
 * 
 * Description: This component is the login of the application. It contains the form to enter the credentials of 
 * the user using Congnito.
 */

import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/login.css';
import giphy from '../../elements/pinkdots.gif';
import logo from '../../elements/izziN.png';
import { useLogInContext } from '../GlobalVariable/LogInContext';
import GlobalContext from '../GlobalVariable/GlobalContext';

const Login = () => {
  const [, agentData] = useLogInContext();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [gifLoaded, setGifLoaded] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorAut, setErrorAut] = useState(false);
  const { url, setToken } = useContext(GlobalContext);

  useEffect(() => {

    // This timeout is to simulate a loading screen
    const loginTimeout = setTimeout(() => {
      setShowLogin(true);
    }, 2000);

    return () => clearTimeout(loginTimeout);
  }, []);


  // This useEffect is to check if the gif is loaded
  useEffect(() => {
    const img = new Image();
    img.onload = () => setGifLoaded(true);
    img.src = giphy;
  }, []);

  // This function is to handle the login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const datos = { email: username, password };
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      };

      const res = await fetch(`http://${url}/auth/signin`, config);
      if (!res.ok) {
        setErrorAut(true);
        throw new Error('La solicitud no pudo completarse con éxito');
      }

      const data = await res.json();
      setToken(data.token.AccessToken);

      console.log(data);

      agentData({
        IdEmpleado: data.user.IdEmpleado,
        Nombre: data.user.Nombre,
        ApellidoP: data.user.ApellidoP,
        ApellidoM: data.user.ApellidoM
      });

      // If the login is successful, navigate to the main screen
      navigate('/window');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <img
        src={giphy}
        alt="Gif de fondo"
        className={`background-gif ${gifLoaded ? 'visible' : ''}`}
      />
      <div className={`background-overlay ${showLogin && gifLoaded ? 'blurred' : ''}`}></div>
      <div className={`login-form ${showLogin && gifLoaded ? 'visible' : ''}`}>
        <h2 className="title">Bienvenido</h2>
        <div>
          <img className="logo" src={logo} alt="logoIzziConnect" />
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