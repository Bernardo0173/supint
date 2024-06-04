import "../../styles/chatbox.css";
import Message from "./Message";
import { useState, useEffect } from "react";

const Chatbox = (props) => {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = () => {
      fetch(`http://127.0.0.1:8080/connect/sentiment/${props.id}`)
        .then((response) => response.json())
        .then((data) => setMessages(data))
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchMessages();

    const intervalId = setInterval(fetchMessages, 2500  );

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <p>Agente: {props.nombreCliente}</p>
        <p>Cliente: {props.nombreAgente}</p>
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
