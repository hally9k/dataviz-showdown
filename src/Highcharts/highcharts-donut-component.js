import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

class HighchartsDonut extends Component {
  render() {

    const donutConfig = {
        credits: false,
        title: {
          text: '347',
          verticalAlign: 'middle',
          floating: true,
          style: { color: 'white', fontSize: '60px' },
          y: 20
        },
        chart: {
            type: 'pie',
            backgroundColor: 'black'
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
        plotOptions: {
            series: {
                backgroundColor: 'silver',
            },
            size: 100
        },
        series: [
        {
          name: 'In progress',
          className: 'highcharts-donut',
          borderWidth: 0,

          data: [
            {
                name: 'In progress',
                y: 89,
                color: 'rgb(144, 237, 125)'
            },
            {
                name: null,
                y: 11
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

export default HighchartsDonut;
