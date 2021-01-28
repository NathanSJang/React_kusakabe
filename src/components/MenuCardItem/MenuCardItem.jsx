import { Grid } from '@material-ui/core'
import MenuItem from '../MenuItem/MenuItem'



export default function MenuCardItem({ item }) {
  const menuItem = item.map(i => <MenuItem item={i}/>)

  return (
    <Grid container justify='space-between' alignItems="stretch" spacing={2}>
      {menuItem}
    </Grid>
  );
}