import { Toolbar, Typography, Link, useMediaQuery, useTheme } from '@material-ui/core'
import Burger from '../Burger/Burger'
import Logo from '../Logo/Logo'
import * as userService from '../../utilities/users-service';

import useStyles from "./styles";

export default function NavBar({ user, setUser }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

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
          {!matches ? 
          <Burger user={user} handleLogOut={handleLogOut} />
          :
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.navLinks} color="inherit" variant="body2" href="/order">Order</Link>
            <Link className={classes.navLinks} color="inherit" variant="body2" href="/confirmation">Confirmation</Link>
            <Link className={classes.navLinks} color="inherit" variant="body2" href="/aboutUs">About Us</Link>
            <Link className={classes.navLinks} color="inherit" variant="body2" href="/policy">Policy</Link>
            {user ? 
            <>
            <span className={classes.navLinks}>Welcome, {user.name}</span>
            <Link className={classes.navLinks} color="inherit" variant="body2" href="/orders/new" onClick={handleLogOut}>Log Out</Link>
            </>
            : 
            <Link className={classes.navLinks} color="inherit" variant="body2" href="/log-in" onClick={handleLogOut}>Log In</Link>}
          </Typography>
          }
        </Toolbar>
    </>
  );
}