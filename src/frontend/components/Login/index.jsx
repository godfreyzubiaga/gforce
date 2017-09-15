import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';
import { StyledDiv, StyledInput, StyledForm } from './style.js';

@inject('store')
class Login extends React.Component {
  render() {
    const { store: { authStore } } = this.props;
    return (
      <StyledDiv>
        <h1>Tambay.ph</h1>
        <StyledForm>
          <StyledInput>
            <label>Username</label>
            <br />
            <input id="username" type="text" name="username" placeholder="Username" onChange={authStore.setValue} />
          </StyledInput>
          <StyledInput>
            <label>Password</label>
            <br />
            <input type="password" id="password" name="password" onChange={authStore.setValue} />
          </StyledInput>
          <StyledInput>
            <input type="submit" name="Login" value="Login" onClick={authStore.handleLogin} />
          </StyledInput>
          <Link to="/signup"> Create an account </Link>
        </StyledForm>
      </StyledDiv>
    );
  }
}

export default Login;