import { useState} from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

import useStyle from './styles.js'

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);
  const classes = useStyle();

  return (
    <main className={classes.mainContainer}>
      <h1 className={classes.authText}>Please Log-In to order</h1>
      {showLogin ?
        <LoginForm setUser={setUser} />
        :
        <SignUpForm setUser={setUser} />
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