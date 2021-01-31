import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  viewOrderBtn: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10vmin'
  },
  lineItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '5vmin',
    marginTop: '3vmin',
    
  },
  textCenter: {
    textAlign: 'center',
  },
  checkOutBtn: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '5vmin',
    marginTop: '2vmin'
  }
}));