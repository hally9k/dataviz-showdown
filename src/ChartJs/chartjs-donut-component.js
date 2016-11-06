import React, { Component } from 'react';
import Chart from 'chart.js/src/chart';

class ChartJsDonut extends Component {

  componentDidMount() {
    var ctx = document.getElementById("chart-js-donut");
    var data = {
        labels: [
            "In progress"
        ],
        datasets: [
            {
                data: [89, 11],
                backgroundColor: [
                    'rgb(144, 237, 125)'
                ],
                hoverBackgroundColor: [
                    'rgb(144, 237, 125)'
                ]
            }]
    };
    new Chart(ctx, {
        type: 'doughnut',
        data
    });
  }

  render() {
    return (
      <canvas id="chart-js-donut" style={{width: '100%'}}></canvas>
    );
  }
}

export default ChartJsDonut;
