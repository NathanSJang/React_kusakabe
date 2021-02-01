import { Typography, Container } from '@material-ui/core'
import k33 from '../../images/k33.jpg'
import useStyle from './styles.js'

export default function AboutUsPage() {
  const classes = useStyle();

  return(
    <Container className={classes.bottomMaring}>
      <img src={k33} alt="aboutUs"/>
      <div className={classes.titleText}>
        <Typography  variant='h6'>
          Owner Chef
        </Typography>
        <Typography variant="h3">
          Mitsunori Kusakabe
        </Typography>
        <Typography variant="h6">
          C.E.O. / Chef, Sun Gathering International, LLC
        </Typography>
      </div>
      <Typography className={classes.contentText} variant="body1">
        Born in Kyoto.
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        Graduated from Kinki University for the Department of Architecture.
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        Learned Kyoto cuisine (Kyo Kaiseki) in Kyoto, the center of traditional Japanese cuisine, which will later become the basis for his cooking style.
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        Was trained various cooking skills including sushi in Osaka and Tokyo, also obtained a cooking license and a blowfish license.
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        Experienced chefs in Canada (Vancouver), as well as in the east coast of the United States (New York, Miami), etc., where he learned about various food cultures in each city. Then returned to San Francisco / Bay area where he found most suitable for his cooking.
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        Won a Michelin Star in SUSHI RAN, where he worked as an executive chef for 10 years.
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        Opened KUSAKABE in Jackson Square in San Francisco in May 2014. Five months later, received a Michelin Star.
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        Was the World Sushi Technical Competition Winner (US representative).
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        Was the winner of US Sushi Technical competition.
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        As one of the representative chefs in the United States, demonstrated with chefs from around the world at the Japanese Food Summit.
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        Was invited to President Obama’s Party (at that time) and served him Sushi.
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        Was a Special Instructor of Japanese Cooking at Napa CIA Cooking School
      </Typography>
      <Typography className={classes.titleText} variant='h5'>
        The restaurant archived
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        Michelin Star
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        San Francisco Chronical Top 100 Restaurant
      </Typography>
      <Typography className={classes.contentText} variant='body1'>
        OpenTable Top 100 Restaurant
      </Typography>











    </Container>
  );
}