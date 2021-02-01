import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../../components/CheckOutForm/CheckOutForm'
import { Typography, Paper, Container } from '@material-ui/core'
import * as ordersAPI from '../../utilities/orders-api';
import * as stripeAPI from '../../utilities/stripe-api';

import useStyle from './styles.js'


const promise = loadStripe('pk_test_51IFth3LxbmCbUYW1tdniXN0CcKQA170ZQ41QAYkXAjKQbMWbEW7MmiLsoQwcLLM49f6rGwbKrdLBsgQcp8Y5jG3G00PibXWO3s');

export default function CheckOutPage({ user }) {
  const [clientSecret, setClientSecret] = useState('');
  const [cart, setCart] = useState(null);

  useEffect(() => {
    async function stripeCheckOut(user) {
      await stripeAPI.checkOut(user)
        .then(data => {setClientSecret(data.clientSecret)});
    }
    stripeCheckOut();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);
  console.log(cart);

  // async function handleCheckOut() {
  //   await ordersAPI.checkOut();
  // }

  // async function handleStripeCheckOut() {
  //   await stripeAPI.checkOut();
  // }

  const classes = useStyle();

  return(
    <Container className={classes.mainContainer}>
      <Paper className={classes.checkOutPaper}>
        <Typography>Put '42' untill End for test</Typography>
        <Elements stripe={promise}>
          <CheckOutForm
            cart={cart}
            user={user}
            clientSecret={clientSecret} 
          />
        </Elements>
      </Paper>
    </Container>
    );
}