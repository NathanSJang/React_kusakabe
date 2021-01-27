import { NavLink } from 'react-router-dom';
import { Toolbar, Typography, Link } from '@material-ui/core'
import Logo from '../Logo/Logo'
import * as userService from '../../utilities/users-service';

import useStyles from "./styles";

export default function NavBar({ user, setUser }) {

  const classes = useStyles();

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
    <Link color="inherit" href="/">
        <Logo />
    </Link>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.navLinks} color="inherit" variant="body2" href="/orders">Order</Link>
            <Link className={classes.navLinks} color="inherit" variant="body2" href="/orders/new">New Order</Link>
            {user ? 
            <>
            <span className={classes.navLinks}>Welcome, {user.name}</span>
            <Link className={classes.navLinks} color="inherit" variant="body2" href="/orders/new" onClick={handleLogOut}>Log Out</Link>
            </>
            : 
            <Link className={classes.navLinks} color="inherit" variant="body2" href="/log-in" onClick={handleLogOut}>Log In</Link>}
            
          </Typography>
        </Toolbar>
    </>
  );
}