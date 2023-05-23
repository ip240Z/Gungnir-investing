import { useState } from 'react';
import Chart from 'react-apexcharts';

let TickerChart = (props) => {

    const chart = {
        options: {
          chart: {
            type: 'candlestick',
            height: 350
          },
          title: {
            text: 'CandleStick Chart',
            align: 'left'
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: {
            tooltip: {
              enabled: true
            }
          }
        },
      };

    return (
        <div>

        </div>
    )

}

