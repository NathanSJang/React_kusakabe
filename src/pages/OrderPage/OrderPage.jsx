import { Button, Grid, Container, Grow } from '@material-ui/core'
import CreaditCard from '@material-ui/icons/CreditCard'
import MenuNavBar from '../../components/MenuNavBar/MenuNavBar'
import MenuCard from '../../components/MenuCard/MenuCard'
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../utilities/redux/actions/items";
import { useState, useEffect, } from 'react';


import useStyle from './styles.js'

export default function OrderPage() {
  const items = useSelector( (state) => state.items )
  const [category, setCategory] = useState([]);

  const classes = useStyle();
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  useEffect(() => {
      const cats = items.reduce((cats, item) => {
      const cat = item.category.name;
      return cats.includes(cat) ? cats : [...cats, cat];
    }, [])
    setCategory(cats)
  },[items]);




  return (
    <div>
      <h1>orderPage</h1>
      <Button variant="contained" color="default" startIcon={<CreaditCard />}>Pick up</Button> 
      <Button variant="contained" color="default" startIcon={<CreaditCard />}>delivery</Button> 
      <MenuNavBar  categories={category} />
      <Grow in>
      <Container>
        <Grid container justify="space-between" >
          <Grid item>
            <MenuCard 
              categories={category} 

            />
          </Grid>
        </Grid>
      </Container>
      </Grow>
    </div>
  );
}