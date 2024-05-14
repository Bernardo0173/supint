//Genera un componente que muestra los reportes de incidencias para su validación
//Autor: Benjamín Alejandro Cruz Cervantes

import Accordion from 'react-bootstrap/Accordion';
//import { useState, useCallback } from 'react';
//Genera un componente que muestra los reportes de incidencias usando la base de datos
//Autor: Eric Manuel Navarro Martínez

/*
AGREGAR ALGO PARA QUE JALE LAS CONDICIONEES DE LA BASE DE DATOS
*/

function ValInc() {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Tipo de incidencia: Robo de cable</Accordion.Header>
                <Accordion.Body>
                    El presente reporte documenta un incidente de robo de cable de fibra óptica ocurrido en la zona residencial del Campo Militar 1-A, Naucalpan. El robo ha dejado a un gran número de residentes sin servicio de internet y comunicaciones, impactando negativamente en su vida diaria y en el funcionamiento de servicios esenciales. La incidencia se produjo aproximadamente el 15-03-2024 a las 13:15 hrs., y se están tomando medidas urgentes para restaurar el servicio y prevenir futuros incidentes similares.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Tipo de incidencia: Interrupción del Servicio de Internet por Falla en el Nodo Principal</Accordion.Header>
                <Accordion.Body>
                    Este reporte detalla una interrupción del servicio de internet en la zona comercial de Centro Urbano, Ciudad del Este, debido a una falla en el nodo principal de la red. La incidencia ha afectado a numerosos negocios y residentes, causando inconvenientes significativos en sus actividades diarias y operaciones comerciales. La falla se detectó el 23 de abril de 2024 a las 10:30 a.m. y se está trabajando arduamente para restablecer el servicio lo antes posible. Se mantendrá actualizada a la comunidad sobre el progreso de las reparaciones y la estimación del tiempo de recuperación del servicio.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
)};

export default ValInc;