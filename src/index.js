import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';

import TemplateComponent from './components/TemplateComponent';
import reducers from './reducers';
                                  // initial state
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={TemplateComponent} />
    </Router>
  </Provider>
  , document.getElementById('app'));
