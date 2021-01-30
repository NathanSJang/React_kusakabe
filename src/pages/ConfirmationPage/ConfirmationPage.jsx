import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import { Typography, Card, Grid, Button, Paper } from "@material-ui/core";
import * as ordersAPI from '../../utilities/orders-api';

export default function ConfirmationPage({ user }) {
  const [orderHistory, setOrderHistory] = useState('');


  const histroy = useHistory();

  useEffect(() => {
    async function getorders() {
      const orderHistory = await ordersAPI.getComfirmation();
      setOrderHistory(orderHistory[0]);
    }
    getorders();
  }, []);

  console.log(orderHistory)

  function handleBackToHome() {
    histroy.push('/');
  };

  return(
    <>
      {user.name}
      <h1>Comfirmation Page</h1>
      {orderHistory.orderId}
      <Paper>
        <OrderDetail cart={orderHistory} />
      </Paper>
      <Button 
        variant="contained" 
        color="primary"
        onClick={handleBackToHome}
      >
        Back to Home
      </Button>
    </>
  );
}