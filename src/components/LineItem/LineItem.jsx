import { Typography, Card, CardMedia, CardContent, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import useStyle from './styles.js'
import sushi from '../../images/sushi.jpeg'

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={sushi}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography>{lineItem.item.name}</Typography>
          <Typography>${lineItem.item.price.toFixed(2)}</Typography>
        </CardContent>
        <div className={classes.controls}>
          {!isPaid && 
            <Button 
              variant="text" 
              color="default" 
              startIcon={<RemoveIcon />}
              onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
              />
          }
        {lineItem.qty}
        {!isPaid && 
        <Button 
          variant="text" 
          color="default" 
          startIcon={<AddIcon />} 
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
          />
        }
        </div>
      </div>
    </Card>
  );
}