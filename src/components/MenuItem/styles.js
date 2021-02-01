import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  addBtn: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  subTitle: {
    marginBottom: '2vmin'
  }
}));