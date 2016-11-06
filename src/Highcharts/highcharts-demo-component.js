import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class HighchartsDemo extends Component {
  render() {

    const donutConfig = {
        credits: false,
        title: { text: 'In Progress' },
        chart: {
            type: 'pie',
        },
        yAxis: {
            title: {
                text: 'In progress',
                enabled: false
            },
            labels: {
              enabled: false
          }
        },
        tooltip: {
          //valueSuffix: '%'
          formatter: function(){
              if (this.point.name === 'Slice') {
                  return false; // suppress the tooltips if it has no name
              } else {
                  return this.series.name + ':<b>' + this.point.percentage +'%</b>';
              }
          }
        },
        series: [
        {
          name: 'In progress',
          animation: {
            duration: 1000
          }    ,
                //enableMouseTracking: false,
          data: [
            {
                name: 'In progress',
                y: 89,
                color: 'green'
            },
            {
                name: null,
                y: 11,
                color: 'silver'
            }
          ],
          size: '80%',
          innerSize: '80%',
          dataLabels: {
              enabled: false
          }
        }]
    };

    return (
      <ReactHighcharts config={donutConfig} neverReflow={true}></ReactHighcharts>
    );
  }
}

export default HighchartsDemo;
