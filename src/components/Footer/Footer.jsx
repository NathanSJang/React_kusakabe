import { Paper, Typography} from '@material-ui/core'
import Logo from '../Logo/Logo'
import SnsLogos from '../SnsLogos/SnsLogos'
import './Footer.css'

export default function Footer() {
  return(
    <footer className="footer">
    <Logo />
    <div className="footerCopyRight">
      <Typography variant="subtitle1">
        copyright @ 2021 Nathan,
      </Typography>
      <Typography variant="subtitle1">
        All rights reserved
      </Typography>
    </div>
    
    <div className="footerLogo">
    <SnsLogos />
    </div>     
    </footer>
  );
}