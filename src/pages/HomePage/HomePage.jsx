import { Container, Typography, Button, Grid } from '@material-ui/core/';
import CreaditCard from '@material-ui/icons/CreditCard';
import useStyle from './styles.js';


import Locations from '../../components/Location/Location';


export default function HomePage({ pickUp, handlePickUp, handleDelivery }) {
    const classes = useStyle();

    return(
      <>
        <Typography className={classes.welcome} variant="h4">
          Welcome to KUSAKABE!
        </Typography>
        <iframe 
          src="https://www.youtube.com/embed/Md8XUdsV7HU?&autoplay=1&mute=1&loop=1&controls=0&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=Md8XUdsV7HU" 
          allow="autoplay mute encrypted-media loop" 
          width="100%"
          height="500px"
          frameborder="0"
          allowfullscreen
          />
          <Container className={classes.topMargin} container>
            <Typography variant="h6">
              KUSAKABE is
            </Typography>
            <Typography className={classes.bottomMargin} variant="subtitle1">
              We are the only restaurant in San Francisco that offers Kyoto style sushi takeout.
            </Typography>
            <Typography variant="h6">
              What is OMIYAGE?
            </Typography>
            <Typography className={classes.bottomMargin} variant="subtitle1">
              Omiyage not only means “take-out”, but also implies as a gift to thank your beloved family members, dear friends, and those who support you, or to give them happiness.
            </Typography>
          </Container>
          <Container className={classes.bottomMargin} container>
            <Typography variant="h6">
              Order Omiyage
            </Typography>
            <div className={classes.topMargin}>
              <Button
                onClick={handlePickUp}
                className={classes.rightMargin} 
                variant="contained" 
                color="default" 
                startIcon={<CreaditCard />}
              >
                Pick up
              </Button> 
              <Button 
                onClick={handleDelivery}
                variant="contained" 
                color="default" 
                startIcon={<CreaditCard />}
              >
                Delivery
              </Button>
            </div>
          </Container>
          <Container container>
              <Locations />
          </Container>
      </>
    );
}

