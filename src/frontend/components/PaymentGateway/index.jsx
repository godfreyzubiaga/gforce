import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { inject } from 'mobx-react';
import {StyledContainer, StyledComponent, StyledHeader, PaymentContainer, StyledField, StyledMenu, StyledSubmit, StyledDiv} from './style.js';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';
import RootStore from '../../stores/RootStore';

// import client from '../../client';
// const store = new RootStore(client);

@inject('store')
class PaymentGateway extends React.Component {
  constructor(props) {
    super(props);
    this.props = props
    this.source = props.match.params.source;
    this.target = props.match.params.target;
    this.amount = props.match.params.amount;
    console.log(this.props.store)
    this.confirmAction = this.confirmAction.bind(this);
  }

  async confirmAction() {
    let confirmResponse = confirm('Please confirm your transaction');

    if (confirmResponse) {
      const response = await this.props.store.paymentGatewayStore.confirm(this.source, this.target, this.amount);
      if (response.error_message !== '') {
        alert('Payment failed!');
      } else {
        alert('Payment successful!');
      }
    } else {
      // do nothing
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <StyledDiv>
        <PaymentContainer>
          <StyledContainer>
            <h2>Payment Confirmation</h2>
            <span>Amount</span>
            <br /> (&#8369;)
            <br />
            <div>
              <StyledField>
                <input type="text" disabled value={this.amount} />
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
              <input type="text" disabled value={this.target} />
            </StyledField>
            <br />
            <StyledSubmit>
              <input type="submit" name="submit" value="Confirm" onClick={this.confirmAction} />
            </StyledSubmit>
          </StyledContainer>
        </PaymentContainer>
        </StyledDiv>
      </div>
    );
  }
}

export default PaymentGateway;
