import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class HighchartsDemo extends Component {
  render() {

    const stackConfig = {
      credits: false,
        chart: {
            type: 'bar',
            backgroundColor: 'rgb(28, 32, 34)'
        },
        title: {
            text: '3.9k',
            style: { color: 'white' }
        },
        xAxis: {
            categories: ['Alert Status'],
            lineWidth: 0,
            gridLineWidth: 0,
            labels: {
                enabled: false
            },
            tickLength: 0,
            tickColor: 'transparent'
        },
        yAxis: {
            min: 0,
            gridLineWidth: 0,
            labels: {
                enabled: false
            },
            title: {
              enabled: false
            }
        },
        legend: {
            enabled: false,
            title: {
              text: ''
            }
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                borderWidth: 10,
                borderColor: 'rgb(28, 32, 34)',
                borderRadius: 20
            }
        },
        series: [{
            name: 'New',
            data: [127],
            color: '#6A747D'
        }, {
            name: 'Job requested',
            data: [58],
            color: '#A0BE20'
        }, {
            name: 'In progress',
            data: [768],
            color: '#F4A423'
        }, {
            name: 'Closed',
            data: [467],
            color: '#0DA4DC'
        }]
    };

    return (
      <div>
        <ReactHighcharts config={stackConfig} neverReflow={true}></ReactHighcharts>
      </div>
    );
  }
}

export default HighchartsDemo;
