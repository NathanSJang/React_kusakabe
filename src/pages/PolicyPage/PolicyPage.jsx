import { Typography, Container } from '@material-ui/core'
import k22 from '../../images/k22.jpg'
import useStyle from './styles.js'

export default function PolicyPage() {
  const classes = useStyle();

  return(
    <Container className={classes.bottomMaring}>
      <img className={classes.responsiveImage} src={k22} alt="policyPage" />
      <Typography className={classes.titleText} variant='h4'>
        COVID-19 Policy and Safety Plans
      </Typography>
      <Typography  variant='body1'>
        Please do self-check prior to dine-in:
        We are not allowed to accept guests who have the following symptoms or  who are exposed to people with COVID-19 symptoms in the last 14 days:
      </Typography>
      <Typography  variant='subtitle1'>
        Fever or chills
      </Typography>
      <Typography  variant='subtitle1'>
        Cough
      </Typography>
      <Typography  variant='subtitle1'>
        Shortness of breath or difficulty breathing
      </Typography>
      <Typography  variant='subtitle1'>
        Fatigue
      </Typography>
      <Typography  variant='subtitle1'>
        Muscle or body aches
      </Typography>
      <Typography  variant='subtitle1'>
        Headache
      </Typography>
      <Typography  variant='subtitle1'>
        New loss of taste or smell
      </Typography>
      <Typography  variant='subtitle1'>
        Sore throat
      </Typography>
      <Typography  variant='subtitle1'>
        Congestion or runny nose
      </Typography>
      <Typography  variant='subtitle1'>
        Nausea or vomiting
      </Typography>
      <Typography  variant='subtitle1'>
        Diarrhea
      </Typography>
      <Typography  variant='h6'>
        At the entrance, we check body temperature with touchless thermometer
      </Typography>
      <Typography className={classes.titleText} variant='h4'>
      Food Allergies and Dietary Restrictions
      </Typography>
      <Typography  variant='body1'>
        We do not have Vegetarian/Vegan options. 
        We will be able to accommodate most of food allergies (such as shellfish and gluten) and other dietary restrictions. 
        Please feel free to contact us if you have any questions regarding food restrictions via email: info@kusakabe-sf.com
      </Typography>
      <Typography className={classes.titleText} variant='h4'>
      Cancellation Policy
      </Typography>
      <Typography  variant='body1'>
      Cancellations within 48 hours of the reservation will be charged $180 per person.
      We call our guests to confirm reservations ahead of time. 
      However, if the reservation has been cancelled on the same day of the reservation or without prior notice (no show), the guests will be charged automatically. 
      If you cancel the reservation for a large party within 72 hours of your reservation date, there will be $180 per guest cancellation fee.
      </Typography>
    </Container>
  );
}