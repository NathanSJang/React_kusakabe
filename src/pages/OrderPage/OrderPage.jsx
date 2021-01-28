import { Button, Grid, Container, Grow, Drawer, Paper, Typography } from '@material-ui/core'
import CreaditCard from '@material-ui/icons/CreditCard'
import MenuNavBar from '../../components/MenuNavBar/MenuNavBar'
import MenuCard from '../../components/MenuCard/MenuCard'
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../utilities/redux/actions/items";
import { getCart } from "../../utilities/redux/actions/orders"
import { useState, useEffect, } from 'react';


import useStyle from './styles.js'

export default function OrderPage() {
  const items = useSelector( (state) => state.items )
  const cart = useSelector( (state) => state.orders )
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false);

  const classes = useStyle();
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);



  useEffect(() => {
      const cats = items.reduce((cats, item) => {
      const cat = item.category.name;
      return cats.includes(cat) ? cats : [...cats, cat];
    }, [])
    setCategory(cats)
  },[items]);




  return (
    <Container>
      <h1>orderPage</h1>
      <Button variant="contained" color="default" startIcon={<CreaditCard />}>Pick up</Button> 
      <Button variant="contained" color="default" startIcon={<CreaditCard />}>delivery</Button> 
      <MenuNavBar  categories={category} />
      <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch"  spacing={3}>
          <Grid item >
            <MenuCard 
              categories={category} 
            />
          </Grid>
        </Grid>
      </Container>
      </Grow>
      <Grid className={classes.viewOrderBtn}>
        <Button variant="contained" color="secondary" onClick={handleDrawerOpen}>View your order</Button>
      </Grid>
      <Drawer variant="persistent" anchor="bottom" open={open}>
        <Paper>
          <Typography>
            Bottom drawer
          </Typography>
        </Paper>
        <Grid className={classes.viewOrderBtn}>
          <Button variant="contained" color="secondary" onClick={handleDrawerClose}>Back to order</Button>
        </Grid>
      </Drawer>
    </Container>
  );
}