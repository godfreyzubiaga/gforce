import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';
import {StyledContainer, StyledComponent, StyledHeader, StyledDiv, StyledField, StyledMenu, StyledSubmit} from './style.js';

@inject('store')
class PaymentGateway extends React.Component {
  render() {
    const { store: { paymentGatewayStore } } = this.props;
    return (
      <div>
        <StyledDiv>
          <StyledHeader>
            <StyledMenu>
              <img src="../assets/menu.png" alt="menu" />
            </StyledMenu>
            <a href="#">Facewoof</a>
          </StyledHeader>
          <StyledContainer>
            <h2>Payment Confirmation</h2>
            <span>Amount</span>
            <br /> (&#8369;)
            <br />
            <div>
              <StyledField>
                <input type="text" disabled value="amount" />
              </StyledField>
              <br />
              <span>Transaction charge* = <strong>10%</strong></span>
              <h5><i>(*included)</i></h5>
            </div>
            <br />
            <span>To</span>
            <br /> (Account Number)
            <br />
            <StyledField>
              <input type="text" disabled value="acctNumber" />
            </StyledField>
            <br />
            <StyledSubmit>
              <input type="submit" name="submit" value="Confirm" onclick="confirm('Please confirm your transaction')" />
            </StyledSubmit>
          </StyledContainer>
        </StyledDiv>
      </div>
    );
  }
}

export default PaymentGateway;
