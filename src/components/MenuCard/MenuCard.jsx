import { Grid } from '@material-ui/core'
import MenuCardItem from '../MenuCardItem/MenuCardItem'

import useStyles from './styles';

export default function MenuCard() {
  const classes = useStyles();

  return (
    <div>
      <p>category-name</p>
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={6}>
          <MenuCardItem />
        </Grid>
      </Grid>
    </div>
  );
}