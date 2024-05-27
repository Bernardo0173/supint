import React from "react";
import Slider from "react-slick";
import "../styles/carrucel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GaugeChartComponent from "./GaugeChart";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import { useEffect, useState } from "react";

export default function SimpleSlider() {
  const [llamadasDeHoy, setLlamadasDeHoy] = useState(0);

  useEffect(() => {
    // Inicialmente cargar datos
    fetch("http://127.0.0.1:8080/llamada/llamadasDeHoy")
      .then((response) => response.json())
      .then((data) => setLlamadasDeHoy(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const labels = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  const datasets = [
    {
      label: "Llamadas Atendidas",
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
    },
    {
      label: "Llamadas Perdidas",
      data: [2, 3, 20, 5, 1, 4, 6],
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
  ];
  return (  
    <Slider {...settings}>
    <div className="d-flex">
        <DoughnutChart value={llamadasDeHoy.llamadasDeHoy} max={100} className="doughnut-chart"/>
      </div>
      <div className="d-flex">
        <LineChart labels={labels} datasets={datasets} className="chart-container"  />
      </div>
      <div className="d-flex">
        <GaugeChartComponent value={0.5} className="chart-container" />
      </div>
      <div className="d-flex">
        <h3>4</h3>
      </div>
      <div className="d-flex">
        <h3>5</h3>
      </div>
      <div className="d-flex">
        <h3>6</h3>
      </div>
    </Slider>
  
  );
}
