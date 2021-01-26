import { Link } from '@material-ui/core'

import Facebook from '../../images/Facebook.png'
import Instagram from '../../images/Instagram.png'
import Yelp from '../../images/Yelp.jpg'
import useStyles from "./styles";

export default function SnsLogos() {
  const classes = useStyles();

  return(
    <>
    <Link href="https://www.facebook.com/kusakabe.sf">
      <img className={classes.image} src={Facebook} alt="Facebook"/>
    </Link>
    <Link href="https://www.instagram.com/kusakabe_sf/?hl=en">
      <img className={classes.image} src={Instagram} alt="Instagram"/>
    </Link>
    <Link href="https://www.yelp.com/biz/kusakabe-san-francisco">
      <img className={classes.image} src={Yelp} alt="Yelp"/>
    </Link>
    </>
  );
}