import { Button, Grid, Container, Grow } from '@material-ui/core'
import CreaditCard from '@material-ui/icons/CreditCard'
import MenuNavBar from '../../components/MenuNavBar/MenuNavBar'
import MenuCard from '../../components/MenuCard/MenuCard'
import { useDispatch } from "react-redux";
import { getItems } from "../../utilities/redux/actions/items";
import {  useEffect } from 'react';


import useStyle from './styles.js'

export default function OrderPage() {

  const classes = useStyle();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div>
      <h1>orderPage</h1>
      <Button variant="contained" color="default" startIcon={<CreaditCard />}>Pick up</Button> 
      <Button variant="contained" color="default" startIcon={<CreaditCard />}>delivery</Button> 
      <MenuNavBar />
      <Grow in>
      <Container>
        <Grid container justify="space-between" >
          <Grid item>
            <MenuCard />
          </Grid>
        </Grid>
      </Container>
      </Grow>
    </div>
  );
}