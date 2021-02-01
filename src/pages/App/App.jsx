import { useState } from 'react';
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

import useStyles from "./styles";

export default function App() {

  const [user, setUser] = useState(getUser());
  const [pickUp, setPickUp] = useState(true);

  const classes = useStyles();
  const histroy = useHistory();

  async function handlePickUp() {
    setPickUp(true);
    histroy.push('/order')
  }

  async function handleDelivery() {
    setPickUp(false);
    histroy.push('/order')
  }

  

  return (
    <Container className="App" className={classes.app} >
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
              handlePickUp={handlePickUp}
              handleDelivery={handleDelivery}
            />
          </Route>
          <Route path="/confirmation">
            <ConfirmationPage user={user} />
          </Route>
          <Route path="/stripe">
            <CheckOutPage user={user} />
          </Route>
          <Route path="/aboutUs">
            <AboutUsPage user={user} />
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
