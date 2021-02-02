import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    height: '100vh',
  },
  checkOutPaper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  mockCard: {
    width: '40%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textCenter: {
    textAlign: 'center',
  },
  total: {
    textAlign: 'center',
    marginTop: '3vmin',
  }
}));