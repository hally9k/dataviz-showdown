import React, { Component } from 'react';
import './App.css';
import HighchartsDonut from './Highcharts/highcharts-donut-component'
import HighchartsStack from './Highcharts/highcharts-stack-component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HighchartsDonut />
        <HighchartsStack />
      </div>
    );
  }
}

export default App;
