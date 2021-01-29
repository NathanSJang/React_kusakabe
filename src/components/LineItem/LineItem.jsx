import { Typography, Card } from '@material-ui/core'

export default function LineItem({ lineItem, isPaid }) {
  return (
    <Card>
      <Typography>{lineItem.item.name}</Typography>
      <Typography>${lineItem.item.price.toFixed(2)}</Typography>
    </Card>
  );
}