import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import styles from './styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';

const StyledA = styled(Link) `
  text-decoration: none !important;
  margin-bottom: 7px;
  color: #333;
`

class Sidebar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    const { store: { authStore } } = this.props;
    return (
      <Menu styles={styles}>
        <StyledA to="/profile">Profile</StyledA>
        <StyledA to="/add-task">Add Task</StyledA>
        <StyledA to="/transactions">Transactions</StyledA>
        <StyledA to="/" onClick={authStore.handleLogout}>Logout</StyledA>
      </Menu>
    );
  }
}

export default inject('store')(Sidebar);