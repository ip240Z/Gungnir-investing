import React from 'react';
import ReactApexChart from 'react-apexcharts';
import "./css/ChartComponent.css"

let ChartComponent = ({chartData}) => {

  const interval = chartData["Meta Data"]["4. Interval"];
  const tickerName = chartData["Meta Data"]["2. Symbol"];
  
  const transformedData = Object.entries(chartData["Time Series (30min)"]).map(([time, values]) => ({
    x: new Date(time),
    y: [
      parseFloat(values["1. open"]),
      parseFloat(values["2. high"]),
      parseFloat(values["3. low"]),
      parseFloat(values["4. close"]),
    ],
  }));

  const options = {
    chart: {
      type: 'candlestick',
      height: 400,
    },
    plotOptions: {
      candlestick: {
        wick: {
          useFillColor: false,
        }
      }
    }
    ,
    series: [
      {
        data: transformedData,
      },
    ],
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

    return (
      <div className='chartWrapper'>
        <h3>{tickerName}</h3>
        <h4>Interval: {interval}</h4>
        <ReactApexChart 
        options={options}
        series={options.series}
        type='candlestick'
        height={400} 
        />
      </div>
    );
};

export default ChartComponent;
