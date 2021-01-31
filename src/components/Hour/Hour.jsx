import { Paper, Typography} from '@material-ui/core'
import useStyles from "./styles";

export default function Hour() {
  const classes = useStyles();
  
  return (
      <Paper className={classes.hour}>
        <Typography variant="h5">
          KUSAKABE
        </Typography>
        <Typography>
          584 Washington Street. San Francisco, CA 94111
        </Typography>
        <Typography variant="h5">
          Hour
        </Typography>
        <Typography>
          Wednesday, 4:30 PM - 6:30PM
        </Typography>
        <Typography>
          Thursday, 4:30 PM - 6:30PM
        </Typography>
        <Typography>
          Friday, 4:30 PM - 6:30PM
        </Typography>
        <Typography>
          Saturday, 4:30 PM - 6:30PM
        </Typography>
        <Typography>
          Sunday, 4:30PM - 6:30PM
        </Typography>
      </Paper>
  );
}