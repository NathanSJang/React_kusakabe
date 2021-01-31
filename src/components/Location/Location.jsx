import { Grid, Container, Typography } from '@material-ui/core' 
import Hour from '../../components/Hour/Hour';
import useStyles from "./styles";

export default function Location() {
  const classes = useStyles();

  return (
    <>
    <Typography variant="h6">Location and Hour</Typography>
    <Container className={classes.locationAndHour}>
      <Grid sm={12} md={6} lg={6}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.7630686992034!2d-122.40290379999998!3d37.795592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808ac81dd12f%3A0x1becc2008d803b31!2sKUSAKABE!5e0!3m2!1sen!2sus!4v1611695725197!5m2!1sen!2sus" 
          width="80%" 
          height="100%" 
          frameborder="0"  
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0" 
        />
      </Grid>
      <Grid sm={12} md={6} lg={6}>
        <Hour />
      </Grid>
    </Container>
    </>
  );
}