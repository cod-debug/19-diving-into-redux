import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/authReducer';

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);  
  
  const handleLogin = (e) => {
    e.preventDefault();
    
    dispatch(authActions.login());
  }

  return (
    <>
      {
        !isAuthenticated &&
        <main className={classes.auth}>
          <section>
            <form onSubmit={handleLogin}>
              <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' />
              </div>
              <button>Login</button>
            </form>
          </section>
        </main>
      }
    </>
  );
};

export default Auth;
