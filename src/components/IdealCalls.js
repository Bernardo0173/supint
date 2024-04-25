//Genera un componente que muestra el promedio de las emociones de cada llamada
//Autor: Benjamín Alejandro Cruz Cervantes

const IdealCalls = ({ calls }) => {
    // Calcular el número de llamadas que son ideales (no pasan de 1 minuto)
    const idealCalls = calls.filter(call => call.duration <= 1).length;

    // Calcular el porcentaje de llamadas ideales
    const percentage = (idealCalls / calls.length) * 100;

    return (
        <div>
            <p>{percentage}%</p>
        </div>
    );
};

export default IdealCalls;