import { Grid } from '@material-ui/core'
import MenuItem from '../MenuItem/MenuItem'


export default function MenuCardItem({ items, handleAddToCart }) {
  const menuItem = items.map(item => <MenuItem key={item._id} item={item} handleAddToCart={handleAddToCart}/>)

  return (
    <Grid container justify='space-between' alignItems="stretch" spacing={2}>
      {menuItem}
    </Grid>
  );
}