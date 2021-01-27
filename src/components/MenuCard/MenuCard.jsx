import { Grid } from '@material-ui/core'
import { useSelector } from "react-redux";
import MenuCardItem from '../MenuCardItem/MenuCardItem'

import useStyles from './styles';

export default function MenuCard() {
  const items = useSelector((state) => state.items )
  const classes = useStyles();

  console.log(items)

  return (
    <div>
      <p>category-name</p>
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
          {items.map((item) => (
            <Grid key={item._id} item xs={12} sm={6}>
              <MenuCardItem item={item}  />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}