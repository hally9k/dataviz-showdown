import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class HighchartsDemo extends Component {
  render() {

    const stackConfig = {
      credits: false,
        chart: {
            type: 'bar',
            backgroundColor: 'black',
            height: 200
        },
        title: {
            text: '',
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
                borderColor: 'black',
                borderRadius: 20
            }
        },
        series: [{
            name: 'New',
            data: [127]
        }, {
            name: 'Job requested',
            data: [58]
        }, {
            name: 'In progress',
            data: [768]
        }, {
            name: 'Closed',
            data: [467]
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
