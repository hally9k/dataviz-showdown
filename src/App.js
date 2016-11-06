import React, { Component } from 'react';
import './App.css';

import {Router, Route, Redirect, browserHistory} from 'react-router';

import HighchartsRoot from './Highcharts/highcharts-root-component';

import ChartJsDonut from './ChartJs/chartjs-donut-component';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
      <Redirect from="/" to="highcharts" />
        <Route path="highcharts" component={HighchartsRoot} />
        <Route path="chartjs" component={ChartJsDonut} />
      </Router>
    );
  }
}

export default App;
