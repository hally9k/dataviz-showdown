import React, { Component } from 'react';

import HighchartsDonut from './highcharts-donut-component'
import HighchartsStack from './highcharts-stack-component'
import HighchartsBigDonut from './highcharts-big-donut-component'

class HighchartsRoot extends Component {
  render() {
    return (
      <div>
        <HighchartsDonut />
        <HighchartsStack />
        <HighchartsBigDonut />
      </div>
    );
  }
}

export default HighchartsRoot;
