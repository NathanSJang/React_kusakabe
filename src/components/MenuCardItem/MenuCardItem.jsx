import { Card, CardContent, Typography } from '@material-ui/core'

import useStyles from './styles';

export default function MenuCardItem() {
  const classes = useStyles();

  return (
    <Card className={classes.menuItemCard}>
      <CardContent>
        <Typography variant="body2">
          menu.name
        </Typography>
      </CardContent>
    </Card>
  );
}