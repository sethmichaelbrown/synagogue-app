import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout';


class Checkout extends Component {

  onToken = (token) => {
    fetch('http://localhost:3000/contributions', {
      method: 'POST',
      body: JSON.stringify({
        fName: 'Dick',
        lName: 'Brown',
        email: 'dbrown@gmail.com',
        contribution: '20',
        eventId: '5'
      })
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      }).catch(err => console.log(err));
    });
  }



  render() {
    return (
      <StripeCheckout
        name="Shaarey Zedek"
        description="Thank you for your contribution"
        token={this.onToken}
        stripeKey="pk_test_WoG8hy6cjaiE5aHsvxYCSlmH00SMagdGzF"
        currency='USD'
        amount={this.props.contribution * 100}>

        <a
          className="waves-effect waves-light btn modal-close" disabled={this.props.contribution ? '' : 'disabled'}>
          Next
        </a>
      </StripeCheckout>
    )
  }
}

export default Checkout