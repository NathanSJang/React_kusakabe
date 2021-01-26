import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  appBar: {
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  navLinks: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginTop: '20px',
    flexGrow: 1,
  },
}));