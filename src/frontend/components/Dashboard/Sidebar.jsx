import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import styles from './styles';
import styled from 'styled-components';

const StyledA = styled.a`
  text-decoration: none !important;
  margin-bottom: 7px;
  color: #333;
`

class Sidebar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu styles={styles}>
        <StyledA id="home" className="menu-item" href="/">Home</StyledA>
        <StyledA id="about" className="menu-item" href="/about">About</StyledA>
        <StyledA id="contact" className="menu-item" href="/contact">Contact</StyledA>
        <StyledA onClick={this.showSettings} className="menu-item--small" href="">Settings</StyledA>
      </Menu>
    );
  }
}

export default Sidebar;