import "../../styles/chatbox.css";

import { CiFaceSmile, CiFaceFrown, CiFaceMeh } from "react-icons/ci";

const Message = ({ emotion, name, time, content, title }) => {
  let icon;
  let messageClass = title === "AGENT" ? "message-agent" : "message";
  let titleClass = title === "AGENT" ? "title-agent" : "title";

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

