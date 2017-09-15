import React from 'react';
import { inject, observer } from 'mobx-react';
import Dashboard from '../Dashboard';
import Login from '../Login';

@inject('store') @observer
class App extends React.Component {
  componentDidMount() {
    const { store: { userStore, authStore } } = this.props;
    authStore.authenticate();
  }

  render() {
    const { store: { userStore } } = this.props;
    return (
      <div>
        {
          userStore.isAuthenticated ? <Dashboard /> : <Login />
        }
      </div>
    );
  }
}

export default App;