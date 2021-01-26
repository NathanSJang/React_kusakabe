import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import HomePage from '../HomePage/HomePage';

import useStyles from "./styles";

export default function App() {
  const [user, setUser] = useState(getUser());

  const classes = useStyles();

  return (
    <Container className="App" maxWidth="100%">
      <AppBar className={classes.appBar} color="inherit" position="static">
        <NavBar user={user} setUser={setUser} />
      </AppBar>
      <Container className={classes.mainContainer} container >
          { user ?
              <>
                <Switch>
                  <Route path="/orders">
                    <OrderHistoryPage />
                  </Route>
                  <Route path="/">
                  <HomePage />
                  </Route>
                  <Redirect to="/" />
                </Switch>
              </>
            :
              <AuthPage setUser={setUser}/>
          }
      </Container>
          <Footer />
    </Container>
  );
}
