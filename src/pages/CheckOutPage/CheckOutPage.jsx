import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../../components/CheckOutForm/CheckOutForm'
import { Typography, Paper, Container } from '@material-ui/core'
import useStyle from './styles.js'


const promise = loadStripe('pk_test_51IFth3LxbmCbUYW1tdniXN0CcKQA170ZQ41QAYkXAjKQbMWbEW7MmiLsoQwcLLM49f6rGwbKrdLBsgQcp8Y5jG3G00PibXWO3s');

export default function CheckOutPage({ cart }) {
  const classes = useStyle();

  return(
    <Container className={classes.mainContainer}>
      <Paper>
        <Typography>Put '42' untill End for test</Typography>
        <Elements stripe={promise}>
          <CheckOutForm cart={cart} />
        </Elements>
      </Paper>
    </Container>
    );
}