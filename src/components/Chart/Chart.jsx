import React, { useState, useEffect } from 'react';
import { fetchDailyData} from '../../api';
import { Line } from 'react-chartjs-2';


const Chart = () => {
  const [dailyData, setDailyData] = useState([])

    useEffect(() => {
      const fetchAPI = async () => {
        setDailyData(await fetchDailyData());
      }

      fetchAPI()
    }, [dailyData])

    const lineChart = (
      dailyData.length ? (<Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Confirmed",
            borderColor: "#3333ff",
            fill: true,
          }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          }],
        }}
      />)
      : null
    )

  return (
    <div>
      {lineChart}
    </div>
  )
}

export default Chart;
