import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import TemplateComponent from './components/TemplateComponent';

ReactDOM.render(
  <Router history={hashHistory}>
    	<Route path="/" component={TemplateComponent} />
  </Router>
  , document.getElementById('app'));
