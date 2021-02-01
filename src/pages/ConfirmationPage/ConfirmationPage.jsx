import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import { Button, Grid, Typography } from "@material-ui/core";
import * as ordersAPI from '../../utilities/orders-api';

import useStyle from './styles.js'

export default function ConfirmationPage({ user }) {
  const [orderHistory, setOrderHistory] = useState('');

  const classes = useStyle();
  const histroy = useHistory();

  useEffect(() => {
    async function getorders() {
      const orderHistory = await ordersAPI.getComfirmation();
      setOrderHistory(orderHistory[0]);
    }
    getorders();
  }, []);


  function handleBackToHome() {
    histroy.push('/');
  };

  return(
    <Grid container justify="center">
      <Grid item lg={12} justify="center">
        <Typography className={classes.comfirmText} variant="h4" justify="center">Comfirmation</Typography>
      </Grid>
        <div>
          <OrderDetail 
            cart={orderHistory}
            user={user}
          />
          <div className={classes.backToHomeBtn}>
            <Button
              variant="contained" 
              color="primary"
              onClick={handleBackToHome}
            >
              Back to Home
            </Button>
          </div>
        </div>

    </Grid>
  );
}