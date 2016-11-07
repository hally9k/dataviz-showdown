import React, { Component } from 'react';

import HighchartsDonut from './highcharts-donut-component'
import HighchartsStack from './highcharts-stack-component'
import HighchartsBigDonut from './highcharts-big-donut-component'
import HighchartsColumn from './highcharts-column-component'

class HighchartsRoot extends Component {
  render() {
    return (
      <div>
        <HighchartsDonut />
        <HighchartsStack />
        <HighchartsBigDonut />
        <HighchartsColumn />
      </div>
    );
  }
}

export default HighchartsRoot;
