import { useState, useEffect, } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../../components/CheckOutForm/CheckOutForm'
import { Typography, Paper, Container } from '@material-ui/core'
import mockCard from '../../images/mockcard.png'
import * as stripeAPI from '../../utilities/stripe-api';

import useStyle from './styles.js'


const promise = loadStripe('pk_test_51IFth3LxbmCbUYW1tdniXN0CcKQA170ZQ41QAYkXAjKQbMWbEW7MmiLsoQwcLLM49f6rGwbKrdLBsgQcp8Y5jG3G00PibXWO3s');

export default function CheckOutPage({ getCart, user }) {
  const [clientSecret, setClientSecret] = useState('');
  const [cart, setCart] = useState(getCart);
  console.log(getCart);
  console.log(cart)




  useEffect(() => {
    async function stripeCheckOut(user) {
      await stripeAPI.checkOut(user)
        .then(data => {setClientSecret(data.clientSecret)});
    }
    stripeCheckOut();
  }, []);


  const classes = useStyle();

  return(
    <Container className={classes.mainContainer}>
      <Paper className={classes.checkOutPaper}>
      <img className={classes.mockCard} src={mockCard} alt="mock card"/>
        <Typography className={classes.textCenter}>
          Info: Please type number '42' untill end of input for Mock payment
        </Typography>
        <Typography className={classes.total}>Total: ${cart.orderTotal}</Typography>
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