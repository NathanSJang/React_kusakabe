import { Card, CardContent, Typography, Grid, CardActions, Button } from "@material-ui/core";

import {useDispatch} from 'react-redux';
import { addToCart } from '../../utilities/redux/actions/orders'
import useStyles from './styles';

export default function MenuItem({ item }) {
  const classes = useStyles();
  const dispatch = useDispatch();

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
          <Button variant="contained" color="primary" onClick={() => dispatch(addToCart(item.id))}>
            Add
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}