import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import abbreviateNumber from '../utility/abbreviate-number-utility'

class HighchartsDonut extends Component {
  render() {

    const title = ['New', 'Job requested', 'In progress', 'Closed'];
    const data = [
      [
        {
            name: 'New',
            y: 456,
            color: '#0DA4DC'
        },
        {
            name: null,
            y: 4559,
            enableMouseTracking: false
        }
      ],
      [
        {
            name: 'Job requested',
            y: 2547,
            color: '#F4A423'
        },
        {
            name: null,
            y: 2468
        }
      ],
      [
        {
            name: 'In progress',
            y: 1324,
            color: '#A0BE20'
        },
        {
            name: null,
            y: 2791
        }
      ],
      [
        {
            name: 'Closed',
            y: 588,
            color: '#6A747D'
        },
        {
            name: null,
            y: 4427
        }
      ],
    ];

    function getConfig(title, data) {
      return {
          credits: false,
          title: {
            text: abbreviateNumber(data[0].y),
            verticalAlign: 'middle',
            floating: true,
            style: { color: 'white', fontSize: '40px', fontWeight: 900, fontFamily: '"Lato", sans-serif;' },
            y: 15
          },
          chart: {
              type: 'pie',
              backgroundColor: '#282C34',
              width: 250,
              height: 250
          },
          yAxis: {
              title: {
                  text: data[0].name,
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
                    //return null; // suppress the tooltips if it has no name
                } else {
                    return this.series.name + ': <b>' + this.point.y + '  :  ' + Math.round(this.point.percentage) +'%</b>';
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
            name: data[0].name,
            className: 'highcharts-donut',
            borderWidth: 0,
            data,
            size: '80%',
            innerSize: '80%',
            dataLabels: {
                enabled: false
            }
          }]
      };
    }

    return (
      <div style={ {marginTop: '50px' } }>
        <div style={ { display: 'inline-block' } }>
          <ReactHighcharts config={getConfig(title[0], data[0])} neverReflow={true}></ReactHighcharts>
        </div>
        <div style={ { display: 'inline-block' } }>
          <ReactHighcharts config={getConfig(title[1], data[1])} neverReflow={true}></ReactHighcharts>
        </div>
        <div style={ { display: 'inline-block' } }>
          <ReactHighcharts config={getConfig(title[2], data[2])} neverReflow={true}></ReactHighcharts>
        </div>
        <div style={ { display: 'inline-block' } }>
          <ReactHighcharts config={getConfig(title[3], data[3])} neverReflow={true}></ReactHighcharts>
        </div>
      </div>
    );
  }
}

export default HighchartsDonut;
