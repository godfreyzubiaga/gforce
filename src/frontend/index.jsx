import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './assets/scss/index.scss';

const stores = { };

ReactDOM.render(
  <Provider {...stores}>
    <Router>
    <div>
      <Route exact path="/" component={() => <div> TEST12 </div>} />
    </div>
</Router>
  </Provider>,
  document.getElementById('mount-point'));

if (module.hot) {
  module.hot.accept();
}