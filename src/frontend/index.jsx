import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { injectGlobal } from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import RootStore from './stores/RootStore';
import App from './components/App';
import client from './client';
import PaymentGateway from './components/PaymentGateway'

const store = new RootStore(client);

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Lobster|Open+Sans');

  body {
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100vw;
    font-family: 'Open Sans', sans-serif;
    color: #333;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/payment-gateway/:source/:target/:amount" component={PaymentGateway} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('mount-point'));

if (module.hot) {
  module.hot.accept();
}

window.app = client;
