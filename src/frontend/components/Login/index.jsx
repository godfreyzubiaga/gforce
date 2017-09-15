import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledDiv, StyledInput, StyledForm } from './style.js';

class Login extends React.Component {
  render() {
    return (
      <StyledDiv>
        <h1>Tambay.ph</h1>
        <StyledForm>
          <StyledInput>
            <label for="password">Username</label>
            <br />
            <input id="username" type="text" name="username" placeholder="Username " />
          </StyledInput>
          <StyledInput>
            <label for="password">Password</label>
            <br />
            <input type="password" name="password" />
          </StyledInput>
          <StyledInput>
            <input type="submit" name="Login" value="Login" />
          </StyledInput>
          <Link to='/signup'><a>Create an account</a></Link>
        </StyledForm>
      </StyledDiv>
    );
  }
}

export default Login;