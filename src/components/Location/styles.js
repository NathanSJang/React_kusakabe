import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  locationAndHour: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '13vmin',
    marginTop: '3vmin',
    paddingLeft: 0,
  },
  hourContainer: {
    maxWidth: 'fit-content'
  }
}));