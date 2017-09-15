import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class PaymentGateway extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h1>Sanity Check</h1>
      <div>Send <input type="text" value={this.props.store.paymentGatewayStore.amount} disabled /> to <input type="text" value={this.props.store.paymentGatewayStore.target} disabled />?</div>
      <div>
        <button
          type="button"
          onClick={this.props.store.paymentGatewayStore.confirm}>
            Confirm
        </button>
        <button type="button">Cancel</button>
      </div>
    </div>);
  }
}

export default PaymentGateway;
