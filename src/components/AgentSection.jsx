import "../styles/agentSection.css";
const AgentSection = (props) => {
    return (
        <div className="AgentSection">
            <h1>{props.texto}</h1>
        </div>
    );
};

export default AgentSection;