/**
 * Author: José Antonio Moreno Tahuilan
 *         Bernardo Limon Montes de Oca
 *         Alfredo Azamar Lopez
 * 
 * Description: This component is a circular chart that shows the weighted average of the
 * emotions of the calls made to the call center.
 */

import React, { useContext, useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import GlobalContext from '../../GlobalVariable/GlobalContext';

const GaugeChartComponent = ({ value }) => {
  const [gaugeValue, setGaugeValue] = useState(value);
  const { url, token } = useContext(GlobalContext);

  /**
   * function to have a weighted average depending on the number of positive, 
   * negative and neutral calls
   */
  function getGaugeValue(data) {
    const Negative = parseInt(data.Negative);
    const Positive = parseInt(data.Positive);
    const Neutral = parseInt(data.Neutral);

    const sum = (Negative * -1) + (Positive * 1) + (Neutral * 0);
    const count = Negative + Positive + Neutral;
    const result = (sum / count) + 1;
    let final = (result * 100) / 2;

    if (isNaN(final) || final === null) {
      final = 50;
    }

    return final;
  }

  // Fetch the number of calls grouped by the type of emotion
  useEffect(() => {
    fetch(`http://${url}/llamada/tipoEmocionPorDia`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        setGaugeValue(getGaugeValue(data[0]));
        console.log(data[0]);
      })
      .then(console.log(gaugeValue))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [token, url]);

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