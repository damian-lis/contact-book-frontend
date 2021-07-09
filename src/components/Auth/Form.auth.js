import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, TextField, Grid } from '@material-ui/core';
import { signIn, signUp } from 'actions/auth.actions';
import { initialState } from 'data/auth.data';
import AuthContext from 'contexts/auth.context';
import authValidation from 'helpers/authValidation.helper';
import Loader from 'components/Loader';
import useStyles from './styles.auth';

const AuthForm = ({ children }) => {
  const { isSignUp, setIsSignUp, authForm, setAuthForm, authFailed, setAuthFailed } = useContext(
    AuthContext.store
  );

  const { authFailedNumbers, message, loading, loadingGoogle, error } = useSelector(
    (state) => state.auth
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  const resetForm = () => {
    setIsSignUp((val) => !val);
    setAuthForm(initialState);
    setAuthFailed(false);
  };

  const handleOnChange = (e, field) => {
    setAuthForm({
      ...authForm,
      [field]: e.target.value
    });
  };

  const handleOnFocus = (fieldName, setAuthFailed) => {
    setAuthForm({
      ...authForm,
      ['invalid' + fieldName[0].toUpperCase() + fieldName.substring(1)]: false
    });

    setAuthFailed && setAuthFailed(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormCorrect = authValidation({
      authForm,
      setAuthForm,
      type: isSignUp ? 'SIGN_UP' : 'SIGN_IN'
    });

    if (!isFormCorrect) return;

    dispatch(isSignUp ? signUp(authForm) : signIn(authForm));
  };

  useEffect(() => {
    if (error) {
      setAuthFailed(true);
    }
  }, [error, authFailedNumbers]);

  return (
    <form className={classes.form} noValidate>
      <Grid container spacing={2}>
        {isSignUp && (
          <>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={authForm.firstName}
                helperText={authForm.invalidFirstName && 'Incorrect name.'}
                error={authForm.invalidFirstName ? true : false}
                disabled={loading || loadingGoogle ? true : false}
                onChange={(e) => handleOnChange(e, 'firstName')}
                onFocus={() => handleOnFocus('firstName')}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lname"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                value={authForm.lastName}
                helperText={authForm.invalidLastName && 'Incorrect last name.'}
                error={authForm.invalidLastName ? true : false}
                disabled={loading || loadingGoogle ? true : false}
                onChange={(e) => handleOnChange(e, 'lastName')}
                onFocus={() => handleOnFocus('lastName')}
              />
            </Grid>
          </>
        )}

        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={authForm.email}
            error={authFailed || authForm.invalidEmail ? true : false}
            helperText={
              authForm.invalidEmail ? 'Incorrect email.' : authFailed && isSignUp ? message : ''
            }
            disabled={loading || loadingGoogle ? true : false}
            onChange={(e) => handleOnChange(e, 'email')}
            onFocus={() => handleOnFocus('email', setAuthFailed)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={authForm.password}
            helperText={
              authFailed && !isSignUp
                ? message
                : authForm.invalidPassword
                ? 'Incorrect password'
                : ''
            }
            error={(authFailed && !isSignUp) || authForm.invalidPassword ? true : false}
            disabled={loading || loadingGoogle ? true : false}
            onChange={(e) => handleOnChange(e, 'password')}
            onFocus={() => handleOnFocus('password', setAuthFailed)}
          />
        </Grid>

        {isSignUp && (
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Confirm Password"
              type="password"
              id="conf_password"
              autoComplete="confirm-password"
              value={authForm.confirmPassword}
              helperText={authForm.invalidConfirmPassword && 'Passwords do not match'}
              error={authForm.invalidConfirmPassword ? true : false}
              disabled={loading || loadingGoogle ? true : false}
              onChange={(e) => handleOnChange(e, 'confirmPassword')}
              onFocus={() => handleOnFocus('confirmPassword', setAuthFailed)}
            />
          </Grid>
        )}
      </Grid>

      <Button
        style={{ height: 45 }}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submitButton}
        disabled={loading || loadingGoogle ? true : false}
        onClick={handleSubmit}>
        {loading ? <Loader type="authLoader" /> : isSignUp ? 'Sign Up' : 'Sign In'}
      </Button>

      {children}

      {!loading || !loadingGoogle ? (
        <Grid container className={classes.linkText}>
          <Grid item>
            <Link to="#" variant="body2" onClick={() => resetForm(true)}>
              {loading
                ? ''
                : isSignUp
                ? 'Already have an account? Sign in'
                : 'Dont have an account? Sign up'}
            </Link>
          </Grid>
        </Grid>
      ) : null}
    </form>
  );
};

export default AuthForm;
