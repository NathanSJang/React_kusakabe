import { Grid } from '@material-ui/core'
import { useSelector } from "react-redux";
import MenuCardItem from '../MenuCardItem/MenuCardItem'

import useStyles from './styles';

export default function MenuCard({ categories }) {
  const items = useSelector( (state) => state.items )

  const classes = useStyles();

  const category = items.reduce((cats, item) => {
    const cat = item.category.name;
    return cats.includes(cat) ? cats : [...cats, cat];}, [])

  const test = items.filter(item => item.category.name === category[0])
  console.log(test)
  console.log(category)
  
  const test1 = category.map((cat, idx) => (
    <Grid container spacing={3}>
      <Grid item key={cat._id}>
        {cat}
        {<MenuCardItem item={items.filter(item => item.category.name === categories[idx])}/>}
      </Grid>
    </Grid>)
  )

  return (
      <>
      {test1}
      </>
  )
}