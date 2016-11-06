import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import abbreviateNumber from '../utility/abbreviate-number-utility'

class HighchartsBigDonut extends Component {

  render() {

    const donutConfig = {
          credits: false,
          title: {
            text: abbreviateNumber(5915),
            verticalAlign: 'middle',
            floating: true,
            style: { color: 'white', fontSize: '100px', fontWeight: 900, fontFamily: '"Lato", sans-serif;' },
            y: 30
          },
          subtitle: {
            text: 'Total active alerts',
            verticalAlign: 'top',
            align: 'left',
            style: { color: 'white', fontSize: '23px', fontWeight: 600, fontFamily: '"Lato", sans-serif;' },
          },
          chart: {
              type: 'pie',
              backgroundColor: '#282C34',
              width: 500,
              height: 500
          },
          yAxis: {
              title: {
                  text: 'Total active alerts',
                  enabled: false
              },
              labels: {
                enabled: false
            }
          },
          tooltip: {
            formatter: function(){
                if (this.point.name !== 'Slice') {
                    return this.series.name + ': <b>' + this.point.y + '  :  ' + Math.round(this.point.percentage) +'%</b>';
                }
                return false;
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
            name: 'Total active alerts',
            className: 'highcharts-donut',
            borderWidth: 0,
            data: [
              {
                  name: 'New',
                  y: 456,
                  color: '#0DA4DC'
              },
              {
                  name: 'Job requested',
                  y: 2547,
                  color: '#F4A423'
              },
              {
                  name: 'In progress',
                  y: 1324,
                  color: '#A0BE20'
              },
              {
                  name: 'Closed',
                  y: 588,
                  color: '#6A747D'
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
      <div id="donuts" style={ { textAlign: 'center', marginTop: '50px' } }>
      <div style={ { display: 'inline-block' } }>
          <ReactHighcharts config={donutConfig} neverReflow={true}></ReactHighcharts>
        </div>
      </div>
    );
  }
}

export default HighchartsBigDonut;
