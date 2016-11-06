import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import abbreviateNumber from '../utility/abbreviate-number-utility'

class HighchartsDemo extends Component {

  render() {
    this.stackConfig = {
      credits: false,
        chart: {
            type: 'bar',
            backgroundColor: '#282C34',
            height: 100,
            marginRight: 100
        },
        title: {
            text: abbreviateNumber(5915),
            align: 'right',
            verticalAlign: 'middle',
            style: { color: 'white', fontSize: '60px', fontWeight: 900, fontFamily: '"Lato", sans-serif;' },
            y: 20
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
                borderColor: '#282C34',
                borderRadius: 20
            }
        },
        series: [{
            name: 'Closed',
            data: [588],
            color: '#6A747D'
        }, {
            name: 'In progress',
            data: [1324],
            color: '#A0BE20'
        }, {
            name: 'Job requested',
            data: [2547],
            color: '#F4A423'
        }, {
            name: 'New',
            data: [456],
            color: '#0DA4DC'
        }]
    };

    return (
      <div style={ { margin: '100px', marginTop: '50px' } }>
        <h2 style={{color: 'white', textAlign: 'left', margin: 0, marginLeft: '0px'}}>Total active alerts</h2>
        <ReactHighcharts config={this.stackConfig} neverReflow={true}></ReactHighcharts>
      </div>
    );
  }
}

export default HighchartsDemo;
