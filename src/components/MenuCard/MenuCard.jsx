import { Grid } from '@material-ui/core'
import { useSelector } from "react-redux";
import { useRef, useEffect } from 'react';
import MenuCardItem from '../MenuCardItem/MenuCardItem'

import useStyles from './styles';

export default function MenuCard() {
  const items = useSelector( (state) => state.items )

  const classes = useStyles();
  const categoriesRef = useRef([])
  
  useEffect(() => {
    categoriesRef.current = items.reduce((cats, item) => {
      const cat = item.category.name;
      return cats.includes(cat) ? cats : [...cats, cat];
    }, [])
    console.log(categoriesRef.current)
  },[items]);



  const itme = items.map((item) => (
    <>
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3} key={item._id}>
        <Grid  item xs={12} sm={6}>
          <MenuCardItem item={item}  />
        </Grid>
      </Grid>
    </>
  ))

  return (
      <>
      <p>category.name: {categoriesRef.current.map(cat => <p>
        {cat}
      </p> )}</p>
      {itme}
      </>
  )
}