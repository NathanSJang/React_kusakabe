import { Button } from '@material-ui/core'
import CreaditCard from '@material-ui/icons/CreditCard'
import MenuNavBar from '../../components/MenuNavBar/MenuNavBar'
import MenuCard from '../../components/MenuCard/MenuCard'
import { useDispatch } from "react-redux";
import { getItems } from "../../utilities/redux/actions/items";
import useStyle from './styles.js'
import { useEffect } from 'react';

export default function OrderPage() {

  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className={classes.mainContainer}>
      <h1>orderPage</h1>
      <Button variant="contained" color="default" startIcon={<CreaditCard />}>Pick up</Button> 
      <Button variant="contained" color="default" startIcon={<CreaditCard />}>delivery</Button> 
      <MenuNavBar />
      <MenuCard />
    </div>
  );
}