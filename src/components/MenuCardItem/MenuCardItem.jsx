import { Grid } from '@material-ui/core'
import MenuItem from '../MenuItem/MenuItem'



export default function MenuCardItem({ item }) {
  const menuItem = item.map(i => <MenuItem item={i}/>)

  return (
    <Grid item xs={12} sm={6}>
      {menuItem}
    </Grid>
  );
}