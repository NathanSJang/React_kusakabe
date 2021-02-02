import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  hide: {
    display: 'none',
  },
  drawer: {
    width: 'drawerWidth',
    flexShrink: 0,
  },
  drawerPaper: {
    width: 'drawerWidth',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  navList: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  topMargin: {
    marginTop: '2.5vmin',
  }
}));