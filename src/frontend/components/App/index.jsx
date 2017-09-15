import React from 'react';
import { inject, observer } from 'mobx-react';
import Dashboard from '../Dashboard';
import Login from '../Login';

const authenticated = true;

@inject('store') @observer
class App extends React.Component {
  componentDidMount() {
    const { store: { userStore } } = this.props;

  }

  render() {
    const { store: { userStore } } = this.props;
    return (
      <div>
        {
          authenticated ? <Dashboard /> : <Login />
        }
      </div>
    );
  }
}

export default App;