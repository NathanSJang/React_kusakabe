import { useState} from 'react';
import { Grid } from '@material-ui/core'
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import k11 from '../../images/k11.jpg'

import useStyle from './styles.js'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  const classes = useStyle();

  return (
    <main className={classes.mainContainer}>
      <h1>Welcome to KUSAKABE</h1>
      <Grid sm={12} md={12} lg={12}>
        <img className={classes.responsiveImage} src={k11} alt="auth"/>
      </Grid>
      {showLogin ?
      <Grid md={12}>
        <h1 className={classes.authText}>Please Log-In to order</h1>
        <h1 className={classes.authText}>ID: test@email.com PW: test</h1>
        <LoginForm setUser={setUser} />
      </Grid>
        :
        <Grid>
          <h1 className={classes.authText}>Please Sign-Up to order</h1>
          <SignUpForm setUser={setUser} />
        </Grid>
      }
      <div className={classes.authBtn}>
        <button
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? 'SIGN UP' : 'LOG IN'}
        </button>
      </div>
    </main>
  );
}