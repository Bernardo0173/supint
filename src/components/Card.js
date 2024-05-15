import BootstrapCard from "./BootstapCard";

function AgenteCard(props) {
    const {
      agentName, 
      clientName, 
      callTime, 
      solvedProblems,
      description,
      style
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