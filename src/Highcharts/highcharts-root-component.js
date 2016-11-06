import React, { Component } from 'react';

import HighchartsDonut from './highcharts-donut-component'
import HighchartsStack from './highcharts-stack-component'

class HighchartsRoot extends Component {
  render() {
    return (
      <div>
        <HighchartsDonut />
        <HighchartsStack />
      </div>
    );
  }
}

export default HighchartsRoot;
