/**
 * Author:  Eric Manuel Navarro
 * 
 * Description: This component is the message that will be displayed in the chatbox
 */

import "../../styles/chatbox.css";

import { CiFaceSmile, CiFaceFrown, CiFaceMeh } from "react-icons/ci";

// This component will display the messages in the chatbox, depending on the role of the message
const Message = ({ emotion, name, time, content, title }) => {
  let icon;
  let messageClass = title === "AGENT" ? "message-agent" : "message";
  let titleClass = title === "AGENT" ? "title2-agent" : "title2";

  // Depending on the emotion, the icon will change
  switch (emotion) {
    case "POSITIVE":
      icon = <CiFaceSmile className="icon-green" />;
      break;
    case "NEGATIVE":
      icon = <CiFaceFrown className="icon-red" />;
      break;
    case "NEUTRAL":
      icon = <CiFaceMeh className="icon-blue" />;
      break;
    default:
      icon = <CiFaceMeh className="icon" />;
  }

  

  return (
    /**
     * Depending on the role of the message, the message will be displayed in a different way
     */
    <div>
    <p className={titleClass}>{name + " " + time}</p>
      <div className={messageClass}>
        {title === "AGENT" ? (
          <>
            <p className="content">{content}</p>
            {icon}
          </>
        ) : (
          <>
            {icon}
            <p className="content-agent">{content}</p>
          </>
        )}
      </div>
    </div>
  );
};



export default Message;

