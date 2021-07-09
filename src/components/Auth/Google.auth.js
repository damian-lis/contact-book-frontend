import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { Button } from '@material-ui/core';
import AuthContext from 'contexts/auth.context';
import useStyles from './styles.auth';
import { signIn, signUp } from 'actions/auth.actions';
import Loader from 'components/Loader';

const AuthGoogle = () => {
  const { isSignUp, setAuthFailed } = useContext(AuthContext.store);
  const { loading, loadingGoogle } = useSelector((state) => state.auth);

  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSuccess = async (res, isSignUp) => {
    console.log('Google login success!');

    const result = res?.profileObj;
    try {
      const form = {
        firstName: result.givenName,
        lastName: result.familyName,
        email: result.email,
        password: result.googleId
      };

      (await isSignUp) ? dispatch(signUp(form, 'google')) : dispatch(signIn(form, 'google'));
    } catch (error) {
      console.log(error);
    }
  };

  const handleFailure = () => {
    console.log('Google login error!');
  };

  const handleClick = (renderProps) => {
    renderProps.onClick();
    setAuthFailed(false);
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_ID}
      render={(renderProps) => (
        <Button
          className={classes.googleButton}
          fullWidth
          variant="contained"
          onClick={() => handleClick(renderProps)}
          disabled={loading || loadingGoogle || renderProps.disabled ? true : false}>
          {loadingGoogle ? (
            <Loader type="authLoader" />
          ) : (
            <div className={classes.googleButtonContent}>
              <img className={classes.googleButtonImage} alt="googleIcon" src="images/google.svg" />{' '}
              <span className={classes.googleButtonText}>
                {isSignUp ? 'google sign up' : 'google sign in'}
              </span>
            </div>
          )}
        </Button>
      )}
      onSuccess={(res) => handleSuccess(res, isSignUp)}
      onFaliure={handleFailure}
      cookiePolicy="single_host_origin"
    />
  );
};

export default AuthGoogle;
