import React, { useContext, useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import GlobalContext from './GlobalVariable/GlobalContext';

const GaugeChartComponent = ({ value }) => {
  const [gaugeValue, setGaugeValue] = useState(value);
  const {url} = useContext(GlobalContext);

  function getGaugeValue(data) {
    const Negative = parseInt(data.Negative);
    const Positive = parseInt(data.Positive);
    const Neutral = parseInt(data.Neutral);

    const suma = (Negative * -1) + (Positive * 1) + (Neutral * 0);
    const cant = Negative + Positive + Neutral;
    const resultado = (suma / cant) + 1;
    const final = (resultado * 100) / 2;
    return final;

  }
  
  useEffect(() => {
    fetch(`http://${url}/llamada/tipoEmocionPorDia`)
      .then((response) => response.json())
      .then((data) => {
        setGaugeValue(getGaugeValue(data[0]));
        console.log(data[0]);
      })
      .then(console.log(gaugeValue))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <GaugeChart 
        id="gauge-chart"
        nrOfLevels={20}
        percent={gaugeValue / 100}
        textColor="#000000"
      />
    </div>
  );
};

export default GaugeChartComponent;