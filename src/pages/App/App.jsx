import { useEffect, useState, } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import OrderPage from '../OrderPage/OrderPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import HomePage from '../HomePage/HomePage';

import useStyles from "./styles";

export default function App() {
  const [user, setUser] = useState(getUser());

  const classes = useStyles();

  return (
    <Container className="App" maxWidth="100%">
      <AppBar className={classes.appBar} color="inherit" position="sticky">
        <NavBar user={user} setUser={setUser} />
      </AppBar>
      <Container>
        <Switch>
          <Route path="/log-in">
            <AuthPage setUser={setUser}/>
          </Route>
          <Route path="/order">
            <OrderPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Container>
          <Footer />
    </Container>
  );
}
