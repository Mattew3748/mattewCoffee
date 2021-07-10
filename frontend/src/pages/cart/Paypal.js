import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends React.Component {
  render() {
    const onSuccess = (payment) => {
      console.log('The payment was succeeded!', payment);
      this.props.onSuccess(payment);
    };

    const onCancel = (data) => {
      console.log('The payment was cancelled!', data);

    };

    const onError = (err) => {
      console.log('Error!', err);

    };

    let env = 'sandbox'; 
    let currency = 'USD';
    let total = (this.props.total / 1150).toFixed(2);


    const client = {
      sandbox:
        'AePHUrE0VuwLu1py-OSKyCq4-sMgzjfVV60J2dGKsGF7Gkr0JL_ZB3du8g94nZxLUHdhcSPr5-swte3s',
      production: 'YOUR-PRODUCTION-APP-ID',
    };

    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
        style={{
          size: 'large',
          color: 'blue',
          shape: 'rect',
          label: 'checkout',
        }}
      />
    );
  }
}
