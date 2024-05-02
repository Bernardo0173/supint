import BootstrapCard from "./BootstapCard";

function AgenteCard(props) {
    const {
      agentName, 
      clientName, 
      callTime = "0.53", 
      solvedProblems = 5, 
      description = "The client description problem. This text comes from the IVR.", 
      style = "bg-success text-white",
    } = props;
  
    // Spread operator for concise prop passing to BootstrapCard
    return (
      <BootstrapCard
        {...{
          Title: `Agent: ${agentName}`,
          Subtitle1: `Client: ${clientName}`,
          Subtitle2: `Call time: ${callTime}`,
          Subtitle3: `Solved problems: ${solvedProblems}`,
          Text1: `Description: ${description}`,
          style,
        }}
      />
    );
  }

export default AgenteCard;