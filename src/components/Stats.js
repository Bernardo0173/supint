//Genera un componente que muestra las estadísticas del Call Center
//Autor: Benjamín Alejandro Cruz Cervantes

import { useState } from 'react';

import PromLlamada from './PromLlamada';
import PromEmoc from './PromEmoc';
import TimeCC from './TimeCC';
import IdealCalls from './IdealCalls';

import '../styles/stats.css';

const Stats = () => {

const fakeCalls = [
    {duration: 1},
    {duration: 3},
    {duration: 2},
    {duration: 5},
    {duration: 1},
];

const avgEmoc = [
    { emotion: 55 },
    { emotion: 63 },
    { emotion: 69 },
    { emotion: 88 },
    { emotion: 94 },
]

    return (
        <div className='stats'>
            <div className='button-row'>
                <button className='kpi-button' variant="contained" color="primary">
                    Tiempo promedio de cada llamada:
                    <PromLlamada calls={fakeCalls} />
                </button>

                <button className='kpi-button' variant="contained" color="primary">
                    Promedio de emociones por llamada:
                    <PromEmoc emoc = {avgEmoc}/>
                </button>
            </div>
            <div className='button-row'>
                <button className='kpi-button' variant="contained" color="primary">
                    Tiempo productivo del Call Center:
                    <TimeCC />
                </button>

                <button className='kpi-button' variant="contained" color="primary">
                    Porcentaje de llamadas en tiempo ideal:
                    <IdealCalls />
                </button>
            </div>
        </div>
    );
};

export default Stats;