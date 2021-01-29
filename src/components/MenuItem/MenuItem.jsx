import { Card, CardContent, Typography, Grid, CardActions, Button } from "@material-ui/core";
import useStyles from './styles';

export default function MenuItem({ item, handleAddToCart }) {
  const classes = useStyles();

  return (
    <Grid item xs={6}>
      <Card className={classes.menuItem}>
        <CardContent>
        <Typography variant="body2">{item.name}</Typography>
        <Typography variant="body2">{item._id}</Typography>
        <Typography variant="body2">{item.description}</Typography>
        <Typography variant="body2">${item.price}</Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={() => handleAddToCart(item._id)}>
            Add
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}