import { useState, useEffect, useRef } from 'react';
import { Button, Grid, Container, Grow, Drawer, Paper, Typography } from '@material-ui/core'
import CreaditCard from '@material-ui/icons/CreditCard'
import MenuNavBar from '../../components/MenuNavBar/MenuNavBar'
import MenuCard from '../../components/MenuCard/MenuCard'

import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';


import OrderDetail from '../../components/OrderDetail/OrderDetail'


import useStyle from './styles.js'

export default function OrderPage({ user }) {
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState(null);
  const [open, setOpen] = useState(false);

  const classes = useStyle();
  const categoriesRef = useRef();

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }


  useEffect(() => {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, [])
      setMenuItems(items);
      setCategories(categoriesRef.current)
    }
    getItems();

    // get Cart
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, [])

  /* Event handler */ 
  async function handleAddToCart(itemId) {
    const cart = await ordersAPI.addItemToCart(itemId);
    setCart(cart);
  }


  return (
    <Container>
      <h1>orderPage</h1>
      <Button variant="contained" color="default" startIcon={<CreaditCard />}>Pick up</Button> 
      <Button variant="contained" color="default" startIcon={<CreaditCard />}>delivery</Button> 
      <MenuNavBar  categories={categories} />
      <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch"  spacing={3}>
          <Grid item >
            <MenuCard 
              menuItems={menuItems}
              categories={categories}
              handleAddToCart={handleAddToCart}
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
          <OrderDetail cart={cart} handleDrawerClose={handleDrawerClose}/>
        </Paper>

      </Drawer>
    </Container>
  );
}