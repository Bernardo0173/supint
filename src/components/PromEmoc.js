//Genera un componente que muestra el promedio de las emociones de cada llamada
//Autor: Benjamín Alejandro Cruz Cervantes

const PromEmoc = ({ emoc }) => {
    // Calcula el promedio en porcentaje de las emociones de las llamadas
    const avgEmotion = emoc.reduce((total, call) => total + call.emotion, 0) / emoc.length;

    return (
        <div>
            <p>{avgEmotion}%</p>
        </div>
    );
};

export default PromEmoc;