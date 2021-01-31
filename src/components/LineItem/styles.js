import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '48vmin',
    minWidth: '300px',
    marginTop: '1vmin',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '68%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  addAndRemove: {
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: '1vmin'
  },
  btn: {
    height: 38,
    width: 38,
  },
}));