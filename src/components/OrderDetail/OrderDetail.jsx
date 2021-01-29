import { Typography, Card, Grid, Button, } from "@material-ui/core";

import LineItem from '../LineItem/LineItem'
import useStyle from './styles.js'

export default function OrderDetail({ cart, handleDrawerClose }) {
  const classes = useStyle();
  if(!cart) return null;

  console.log(cart)
  const lineItems = cart.lineItems.map(item => 
    <LineItem 
      lineItem={item}
      isPaid={cart.isPaid}
      key={item._id}
    />)
  return (
    <>
      <h1>order detail</h1>
        <Card>
          <Typography>{cart.orderId}</Typography>
          <Typography>{new Date(cart.updatedAt).toLocaleDateString()}</Typography>
        </Card>
        <div className={classes.lineItems}>
          {lineItems}
        </div>
        <div className={classes.viewOrderBtn}>
          Qty: {cart.totalQty}
          Total: ${cart.orderTotal.toFixed(2)}
          <Button variant="contained" color="primary">CheckOut</Button>
        </div>
      <Grid className={classes.viewOrderBtn}>
        <Button variant="contained" color="secondary" onClick={handleDrawerClose}>Back to order</Button>
      </Grid>
    </>
  );
}