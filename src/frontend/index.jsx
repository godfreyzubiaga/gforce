import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { HashRouter as Router, Route } from 'react-router-dom';
import RootStore from './stores/RootStore';
import client from './client';

const store = new RootStore(client);

ReactDOM.render(
  <Provider store={store}>
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