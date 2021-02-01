import { Typography, Card, Grid, Button, CardContent, Container, Paper } from "@material-ui/core";

import LineItem from '../LineItem/LineItem'
import useStyle from './styles.js'

export default function OrderDetail({ user, cart, handleDrawerClose, handleChangeQty, handleCheckOut }) {
  const classes = useStyle();
  if(!cart) return null;

  const lineItems = cart.lineItems.map(item => 
    <LineItem 
      lineItem={item}
      isPaid={cart.isPaid}
      key={item._id}
      handleChangeQty={handleChangeQty}
    />)

  return (
    <Paper variant="outlined">
      <Container Container sm={6}>
        <h1 className={classes.textCenter}>order detail</h1>
          <Card item>
            <CardContent className={classes.textCenter}>
              {cart.isPaid && 
                <Typography variant="h6">Thank you {user.name}</Typography>
              }
              <Typography variant="h6">Order Id: {cart.orderId}</Typography>
              <Typography variant="h6">Date: {new Date(cart.updatedAt).toLocaleDateString()}</Typography>
          <div className={classes.lineItems}>
            <Typography>Items: </Typography>
            {lineItems}
          </div>
              <Typography>Qty: {cart.totalQty}</Typography>
              <Typography>Total: ${cart.orderTotal.toFixed(2)}</Typography>
            {cart.isPaid ?
            <Typography variant="h6">
              Thank You
            </Typography>
            :
            <div className={classes.checkOutBtn}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={handleCheckOut}
              disabled={!lineItems.length}
            >
              CheckOut
            </Button>
              </div>
            }
        <Grid className={classes.viewOrderBtn}>
          {!cart.isPaid &&
            <Button variant="contained" color="secondary" onClick={handleDrawerClose}>Back to order</Button>
          }
        </Grid>
        </CardContent>
          </Card>
      </Container>
    </Paper>
  );
}