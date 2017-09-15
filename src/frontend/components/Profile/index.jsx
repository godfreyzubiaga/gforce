import React from 'react';
import { inject, observer } from 'mobx-react';
import Dashboard from '../Dashboard';
import Login from '../Login';

const authenticated = true;

@inject('store') @observer
class Profile extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <div>{task.employer}</div>
    );
  }
}

export default Profile;