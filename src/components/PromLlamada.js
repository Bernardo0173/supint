//Genera un componente que muestra el tiempo promedio de cada llamada
//Autor: Benjamín Alejandro Cruz Cervantes

const PromLlamada = ({calls}) => {
    //Calcula el promedio en minutos de la duración de las llamadas
    const avgDuration = calls.reduce((total, call) => total + call.duration,0)/calls.length;
    
    return (
        <div>
            <p>{avgDuration} minutos</p>
        </div>
    );
};

export default PromLlamada;