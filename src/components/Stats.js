//Genera un componente que muestra las estadísticas del Call Center
//Autor: Benjamín Alejandro Cruz Cervantes

import React, { useState } from 'react';

import PromLlamada from './PromLlamada';
import PromEmoc from './PromEmoc';
import TimeCC from './TimeCC';
import IdealCalls from './IdealCalls';

import '../styles/stats.css';

const Stats = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    return (
        <div className='stats'>
            <div className='button-row'>
                <button className='kpi-button' variant="contained" color="primary" onClick={() => setOpen1(true)}>
                    Tiempo promedio de cada llamada
                </button>
                <dialog open={open1} onClose={() => setOpen1(false)}>
                    <PromLlamada />
                </dialog>

                <button className='kpi-button' variant="contained" color="primary" onClick={() => setOpen2(true)}>
                    Promedio de las emociones de cada llamada
                </button>
                <dialog open={open2} onClose={() => setOpen2(false)}>
                    <PromEmoc />
                </dialog>
            </div>
            <div className='button-row'>
                <button className='kpi-button' variant="contained" color="primary" onClick={() => setOpen3(true)}>
                    Tiempo productivo del Call Center
                </button>
                <dialog open={open3} onClose={() => setOpen3(false)}>
                    <TimeCC />
                </dialog>

                <button className='kpi-button' variant="contained" color="primary" onClick={() => setOpen4(true)}>
                    Porcentaje de llamadas en tiempo ideal
                </button>
                <dialog open={open4} onClose={() => setOpen4(false)}>
                    <IdealCalls />
                </dialog>
            </div>
        </div>
    );
};

export default Stats;