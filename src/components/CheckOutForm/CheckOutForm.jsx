import { useState} from 'react';
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Grid } from '@material-ui/core'

import useStyle from './styles.js'

export default function CheckOutForm({ clientSecret, cart }) {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);

  console.log(clientSecret)
  console.log(cart)
  
  const classes = useStyle();
  const stripe = useStripe();
  const elements = useElements();
  const histroy = useHistory();


  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async ev => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      cart.isPaid = true;
      histroy.push('/confirmation')
    }
  };

  return(
    <form className={classes.form} id="payment-form" onSubmit={handleSubmit}>
      <Grid container>
        <Grid item sm={12} lg={12}>
          <CardElement className={classes.cardStyle} id="card-element"  onChange={handleChange} />
        </Grid>
      </Grid>
      <Grid sm={12}>
        <button
          className={classes.btn}
          disabled={processing || disabled || succeeded}
          id="submit"
        >
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay"
            )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
      </Grid>
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Refresh the page to pay again.
      </p>
    </form>
  );

}