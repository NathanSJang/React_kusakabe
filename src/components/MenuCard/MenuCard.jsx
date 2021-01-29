import { Grid, Typography } from '@material-ui/core'
import MenuCardItem from '../MenuCardItem/MenuCardItem'

import useStyles from './styles';

export default function MenuCard({ categories, menuItems, handleAddToCart }) {

  const classes = useStyles();

  const filterByCat = categories.map((cat, idx) =>
    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item>
        <Typography variant="h6">
          {cat}
        </Typography>
        </Grid>
        <Grid item>
          <MenuCardItem 
            items={menuItems.filter(item => item.category.name === categories[idx])}
            handleAddToCart={handleAddToCart}
            />
      </Grid>
      </Grid>
  )



  return (
      <>
        {filterByCat}
      </>
  )
}