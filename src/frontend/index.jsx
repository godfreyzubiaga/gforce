import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { injectGlobal } from 'styled-components';
import { HashRouter as Router, Route } from 'react-router-dom';
import RootStore from './stores/RootStore';
import App from './components/App';
import client from './client';
import Map from './components/Map/Map';
import Profile from './components/Profile';
const store = new RootStore(client);

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  body {
    margin: 0px;
    padding: 0px;
    height: 100vh;
    width: 100vw;
    font-family: 'Open Sans', sans-serif;
    color: #333;
  }
`;

//to be an observable in store, from db
const tasks = [
  {
    _id : '5995c5c438070f179c609451',
    description : 'Wash Dishes',
    employer : 'Brent',
    dateIssued : new Date('2017-7-14'),
    minPrice : 300,
    maxPrice : 1000,
  }, 
  {
      _id : '5995c5c438070f179c609452',
      description : 'Do Laundry',
      employer : 'Li',
      dateIssued : new Date('2017-8-11'),
      minPrice : 200,
      maxPrice : 500,
  },
  {
      _id : '5995c5c438070f179c609453',
      description : 'Buy Groceries',
      employer : 'Gly',
      dateIssued : new Date('2017-11-24'),
      minPrice : 450,
      maxPrice : 800,
  }
]

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={() => <App />} />
        <Route path="/map" component={() => <Map />} />
        <Route path="/signup" component={() => <div>Singup Here!</div>} />
        {tasks.map((task, index)=> <Route path={`/task-${index}`} component={() => <Profile task={task}/>} />)}
      </div>
    </Router>
  </Provider>,
  document.getElementById('mount-point'));
{/* <App /> */}
if (module.hot) {
  module.hot.accept();
}

window.app = client;