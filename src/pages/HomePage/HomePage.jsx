import { Paper, Typography, Button, Grid } from '@material-ui/core/';
import CreaditCard from '@material-ui/icons/CreditCard'
import { useState } from 'react';
import useStyle from './styles.js'


import Locations from '../../components/Location/Location';


export default function HomePage() {
    const classes = useStyle();

    return(
      <div>
        <h1>HomePage</h1>
        <iframe 
          src="http://www.youtube.com/embed/Md8XUdsV7HU?&autoplay=1&mute=1&loop=1&controls=0&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=Md8XUdsV7HU" 
          allow="autoplay mute encrypted-media loop" 
          width="100%"
          height="500px"
          frameborder="0"
          allowfullscreen
          />
            <Typography variant="h4">
              Welcome to KUSAKABE!
            </Typography>
            <Typography variant="subtitle1">
              We are the only restaurant in San Francisco that offers Kyoto style sushi takeout.
            </Typography>
            <Typography variant="h4">
              What is OMIYAGE?
            </Typography>
            <Typography variant="hsubtitle1">
              Omiyage not only means “take-out”, but also implies as a gift to thank your beloved family members, dear friends, and those who support you, or to give them happiness.
            </Typography>
          <div>
            choose your Omiyage for 
            <Button variant="contained" color="default" startIcon={<CreaditCard />}>Pick up</Button> 
            or 
            <Button variant="contained" color="default" startIcon={<CreaditCard />}>Delivery</Button>
          </div>
          <Grid>
            <Locations />
          </Grid>
      </div>
    );
}

