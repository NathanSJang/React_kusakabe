import { Paper, Typography } from '@material-ui/core';

import Locations from '../../components/Location/Location';


export default function HomePage() {
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
            <Typography variant="h3">
              Welcome to KUSAKABE!
            </Typography>
            <Typography variant="h6">
              We are the only restaurant in San Francisco that offers Kyoto style sushi takeout.
            </Typography>
            <Typography variant="h3">
            What is OMIYAGE?
            </Typography>
            <Typography>
              Omiyage not only means “take-out”, but also implies as a gift to thank your beloved family members, dear friends, and those who support you, or to give them happiness.
            </Typography>
          <div>
            take out button
          </div>
          <Locations />
      </div>
    );
}

