import { useState } from 'react';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Drawer, Divider, Typography, Link, Toolbar, IconButton  } from "@material-ui/core";

import useStyles from "./styles";

export default function Burger({ user, handleLogOut }) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return(
    <>
    <Toolbar className={classes.topMargin}>
      <IconButton 
        onClick={handleDrawerOpen}
        className={clsx(open && classes.hide)}
      >
        <MenuIcon />
      </IconButton>
    </Toolbar>
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <Toolbar>
      <Typography variant="h6" className={classes.navList}>
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
      </Toolbar>
    </Drawer>
    </>

  ); 
}