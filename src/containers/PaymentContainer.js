import React from 'react';
import { isEmptyString } from '../shared/util';
import {Payment} from "../components/Payment";

export class PaymentContainer extends React.Component {
  state = {
    fullName: '',
    email: '',
    cardNumber: '',
    cardHolderName: '',
    expiry: '',
    cvv: '',
    disabled: false
  };

  onFullNameChange = name => this.setState({ fullName: name });

  onEmailChange = email => this.setState({ email: email });

  onCardNumberChange = cardNumber => this.setState({ cardNumber: cardNumber });

  onCardHolderNameChange = cardHolderName => this.setState({ cardHolderName: cardHolderName });

  onExpiryChange = expiry => this.setState({ expiry: expiry });

  onCvvChange = cvv => this.setState({ cvv: cvv });

  isDisabled = () => {
    let { fullName, email, cardNumber, cardHolderName, expiry, cvv } = this.state;
    return (
      isEmptyString(fullName) ||
      isEmptyString(email) ||
      isEmptyString(cardNumber) ||
      isEmptyString(cardHolderName) ||
      isEmptyString(expiry) ||
      isEmptyString(cvv)
    );
  };

  render() {
    return (
      <Payment
        fullName={this.state.fullName}
        email={this.state.email}
        cardNumber={this.state.cardNumber}
        cardHolderName={this.state.cardHolderName}
        expiry={this.state.expiry}
        cvv={this.state.cvv}
        onFullNameChange={this.onFullNameChange}
        onEmailChange={this.onEmailChange}
        onCardNumberChange={this.onCardNumberChange}
        onCardHolderNameChange={this.onCardHolderNameChange}
        onExpiryChange={this.onExpiryChange}
        onCvvChange={this.onCvvChange}
        onMakePayment={this.props.onMakePayment}
        disabled={this.isDisabled()}
      />
    );
  }
}
