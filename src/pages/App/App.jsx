import { useState, useEffect, useRef } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { Container, AppBar} from '@material-ui/core';
import AuthPage from '../AuthPage/AuthPage';
import OrderPage from '../OrderPage/OrderPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import HomePage from '../HomePage/HomePage';
import ConfirmationPage from '../ConfirmationPage/ConfirmationPage';
import CheckOutPage from '../CheckOutPage/CheckOutPage';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import PolicyPage from '../PolicyPage/PolicyPage';
import * as ordersAPI from '../../utilities/orders-api';

import useStyles from "./styles";


export default function App() {

  const [user, setUser] = useState(getUser());
  const [pickUp, setPickUp] = useState(true);
  const [getCart, setgetCart] = useState(null);


  const classes = useStyles();
  const histroy = useHistory();
  const cartRef = useRef();

  useEffect(() => {
    async function getCart() {
      if(!user) return null
      cartRef.current = await ordersAPI.getCart();
      setgetCart(cartRef.current)
    }
    getCart();
  }, [user]);

  async function handlePickUp() {
    setPickUp(true);
    histroy.push('/order')
  }

  async function handleDelivery() {
    setPickUp(false);
    histroy.push('/order')
  }

  

  return (
    <Container className={classes.app} >
      <AppBar item className={classes.appBar} color="inherit" position="sticky">
        <NavBar user={user} setUser={setUser} />
      </AppBar>
      <Container className={classes.mainContainer}>
        {!user ? 
            <AuthPage setUser={setUser}/>
          :
        <Switch>
          <Route path="/order">
            <OrderPage 
              user={user}
              pickUp={pickUp}
              getCart={getCart}
              setgetCart={setgetCart}
              handlePickUp={handlePickUp}
              handleDelivery={handleDelivery}
            />
          </Route>
          <Route path="/confirmation">
            <ConfirmationPage user={user} />
          </Route>
          <Route path="/stripe">
            <CheckOutPage getCart={getCart} user={user} />
          </Route>
          <Route path="/aboutUs">
            <AboutUsPage user={user} />
          </Route>
          <Route path="/policy">
            <PolicyPage user={user} />
          </Route>
          <Route path="/">
            <HomePage
              pickUp={pickUp}
              handlePickUp={handlePickUp}
              handleDelivery={handleDelivery}
            />
          </Route>
          {user ? 
          <Redirect to="/" />
          :
          <Redirect to="/log-in" />
          }
        </Switch>
        }
      </Container>
          <Footer />
    </Container>
  );
}
