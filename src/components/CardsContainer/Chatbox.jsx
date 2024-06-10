import "../../styles/chatbox.css";
import Message from "./Message";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../GlobalVariable/GlobalContext";

const Chatbox = (props) => {

  const [messages, setMessages] = useState([]);
  const { url, token} = useContext(GlobalContext);

  useEffect(() => {
    const fetchMessages = () => {
      fetch(`http://${url}/connect/sentiment/${props.id}`, {
        headers: { Authorization: `Bearer ${token}`}})
        .then((response) => response.json())
        .then((data) => setMessages(data))
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchMessages();

    const intervalId = setInterval(fetchMessages, 2500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <p>Agente: {props.nombreAgente}</p>
        <p>Cliente: {props.nombreCliente}</p>
      </div>

      <div className="chat-container">
        {messages.map((mensaje) => (
          <Message
            key={mensaje.content}
            name={mensaje.role}
            time={mensaje.startTime}
            content={mensaje.content}
            emotion={mensaje.sentiment}
            title={mensaje.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Chatbox;
