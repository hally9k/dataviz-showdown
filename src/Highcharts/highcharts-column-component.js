import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class HighchartsColumn extends Component {

  render() {

    const columnConfig = {
        credits: false,
        chart: {
            type: 'column',
            style: { fontFamily: '"Lato", sans-serif;' }
        },
        title: {
            text: 'Alert recurrences',
            align: 'left'
        },
        xAxis: {
          type: 'datetime',
        },
        yAxis: {
            min: 0,
            title: {
                enabled: false
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        legend: {
          enabled: false
        },
        series: [{
          name: 'Occurances',
            data: [
                [Date.UTC(2016, 1, 11), 1],
                [Date.UTC(2016, 1, 25), 33],
                [Date.UTC(2016, 2, 11), 43],
                [Date.UTC(2016, 3, 11), 3],
                [Date.UTC(2016, 4, 1), 4],
                [Date.UTC(2016, 4, 5), 87],
                [Date.UTC(2016, 4, 19), 65],
                [Date.UTC(2016, 5, 3), 3]
            ]
        }]
    };

    return (
      <div id="column" style={ { textAlign: 'center', marginTop: '50px' } }>
        <div style={ { display: 'inline-block' } }>
          <ReactHighcharts config={columnConfig} neverReflow={true}></ReactHighcharts>
        </div>
      </div>
    );
  }
}

export default HighchartsColumn;
