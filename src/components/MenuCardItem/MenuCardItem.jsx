import { Card, CardContent, Typography } from '@material-ui/core'

import useStyles from './styles';

export default function MenuCardItem({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.menuItemCard}>
      <CardContent>
        <Typography variant="body2">{item.name}</Typography>
        <Typography variant="body2">{item.description}</Typography>
        <Typography variant="body2">${item.price}</Typography>
      </CardContent>
    </Card>
  );
}