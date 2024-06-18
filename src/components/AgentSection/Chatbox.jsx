/**
 *  Author: Eric Manuel Navarro
 * 
 *  Description: This component is the chatbox that contains the messages of the conversation
 */

import "../../styles/chatbox.css";
import Message from "./Message";
import { useState, useEffect, useContext } from "react";
import GlobalContext from "../GlobalVariable/GlobalContext";

const Chatbox = ({id, agentName, clientName}) => {

  const [messages, setMessages] = useState([]);
  const { url, token} = useContext(GlobalContext);

  // Fetch the messages from the conversation directly from a Call in Amazon Connect
  useEffect(() => {
    const fetchMessages = () => {
      fetch(`http://${url}/connect/sentiment/${id}`, {
        headers: { Authorization: `Bearer ${token}`}})
        .then((response) => response.json())
        .then((data) => setMessages(data))
        .catch((error) => console.error("Error fetching data:", error));
    };

    fetchMessages();

    const intervalId = setInterval(fetchMessages, 2500);

    return () => clearInterval(intervalId);
  }, [url, token, id]);

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <p>Agente: {agentName}</p>
        <p>Cliente: {clientName}</p>
      </div>

      {/* Transform all the JSON in a group of messages. */}
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
