import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    height: '100vh',
    marginBottom: '20vmin',
  },
  authText: {
    textAlign: 'center'
  },
  authBtn: {
    display: 'flex',
    justifyContent: 'center',
  },
  responsiveImage: {
    width: '99.5%',
    height: 'auto',
  }
}));