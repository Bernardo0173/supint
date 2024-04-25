//Genera un componente que muestra el tiempo productivo del Call Center
//Autor: Benjamín Alejandro Cruz Cervantes

const TimeCC = ({ timeCallCenter }) => {
    // Calcular el tiempo productivo total del Call Center
    const totalTime = timeCallCenter.reduce((total, call) => total + call.time, 0);

    return (
        <div>
            <p>{totalTime} minutos</p>
        </div>
    );
};

export default TimeCC;