import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

import {
  Container,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { signIn, signUp } from 'actions/auth.actions';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    backgroundColor: 'red'
  }
}));

const Auth = ({ history }) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const classes = useStyles();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [authForm, setAuthForm] = useState(initialState);
  const { userInfo, authFailedNumbers } = useSelector((state) => state.userLogin);
  const [loader, setLoader] = useState(false);
  const [googleLoader, setGoogleLoader] = useState(false);

  const [authFailed, setAuthFailed] = useState(false);

  const [invalidFirstName, setInvalidFirstName] = useState(false);
  const [invalidLastName, setInvalidLastName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [passwordsDoNotMatch, setPasswordsDoNotMatch] = useState(false);

  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;

    try {
      const form = {
        firstName: result.givenName,
        lastName: result.familyName,
        email: result.email,
        password: result.googleId
      };

      await dispatch(signUp(form));
    } catch (error) {
      console.log(error);
    }
  };

  const googleFaliure = () => {
    console.log('Google Sign In Unsuccessful. Try Again Later');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailValidationRegexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (isSignUp) {
      if (authForm.firstName === '' || authForm.firstName.length < 2) {
        setInvalidFirstName(true);
      }

      if (authForm.lastName === '' || authForm.lastName.length < 2) {
        setInvalidLastName(true);
      }

      if (authForm.password === '' || authForm.password.length < 5) {
        setInvalidPassword(true);
      }

      if (authForm.password !== authForm.confirmPassword) {
        setPasswordsDoNotMatch(true);
      }

      if (
        authForm.email === '' ||
        !emailValidationRegexp.test(String(authForm.email).toLowerCase())
      ) {
        return setInvalidEmail(true);
      }

      if (
        authForm.firstName === '' ||
        authForm.lastName === '' ||
        authForm.email === '' ||
        authForm.password === '' ||
        authForm.confirmPassword === '' ||
        authForm.password !== authForm.confirmPassword
      ) {
        return;
      }

      dispatch(signUp(authForm));
      setLoader(true);
    } else {
      if (authForm.password === '') {
        setInvalidPassword(true);
      }

      if (
        authForm.email === '' ||
        !emailValidationRegexp.test(String(authForm.email).toLowerCase())
      ) {
        return setInvalidEmail(true);
      }

      if (authForm.email === '' || authForm.password === '') {
        return;
      }

      dispatch(signIn(authForm));
      setLoader(true);
    }
  };

  useEffect(() => {
    if (userInfo) {
      history.push('/contact');
    }

    if (userInfo === false) {
      setAuthForm(initialState);
      setAuthFailed(true);
    }
    setLoader(false);
  }, [history, userInfo, authFailedNumbers]);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {`${isSignUp ? 'Sign Up' : 'Sign In'}`}
          </Typography>
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
                      helperText={invalidFirstName && 'Incorrect name.'}
                      error={invalidFirstName ? true : false}
                      disabled={loader || googleLoader ? true : false}
                      onChange={(e) =>
                        setAuthForm({
                          ...authForm,
                          firstName: e.target.value
                        })
                      }
                      onFocus={() => setInvalidFirstName(false)}
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
                      helperText={invalidLastName && 'Incorrect last name.'}
                      error={invalidLastName ? true : false}
                      onChange={(e) =>
                        setAuthForm({
                          ...authForm,
                          lastName: e.target.value
                        })
                      }
                      onFocus={() => setInvalidLastName(false)}
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
                  error={authFailed || invalidEmail ? true : false}
                  helperText={invalidEmail && 'Incorrect email.'}
                  disabled={loader || googleLoader ? true : false}
                  onChange={(e) =>
                    setAuthForm({
                      ...authForm,
                      email: e.target.value
                    })
                  }
                  onFocus={() => {
                    setAuthFailed(false);
                    setInvalidEmail(false);
                  }}
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
                    authFailed
                      ? 'Incorrect email or password.'
                      : invalidPassword
                      ? 'Incorrect password'
                      : ''
                  }
                  error={authFailed || invalidPassword ? true : false}
                  disabled={loader || googleLoader ? true : false}
                  onChange={(e) =>
                    setAuthForm({
                      ...authForm,
                      password: e.target.value
                    })
                  }
                  onFocus={() => {
                    setAuthFailed(false);
                    setInvalidPassword(false);
                  }}
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
                    helperText={passwordsDoNotMatch && 'Passwords do not match'}
                    error={passwordsDoNotMatch ? true : false}
                    onChange={(e) =>
                      setAuthForm({
                        ...authForm,
                        confirmPassword: e.target.value
                      })
                    }
                    onFocus={() => setPasswordsDoNotMatch(false)}
                  />
                </Grid>
              )}
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loader || googleLoader ? true : false}
              onClick={handleSubmit}>
              {`${loader ? '' : isSignUp ? 'Sign Up' : 'Sign In'}`}
              {loader && (
                <CircularProgress
                  style={{
                    color: 'white',
                    opacity: 0.6,
                    width: '24px',
                    height: '24px'
                  }}
                  disableShrink
                />
              )}
            </Button>

            <GoogleLogin
              clientId={'339342796622-ked3g3vnl8qa265d5m2bpreg8s8al7gi.apps.googleusercontent.com'}
              render={(renderProps) => (
                <Button
                  className={classes.googleButton}
                  color="primary"
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    renderProps.onClick();
                    setGoogleLoader(true);
                    setAuthFailed(false);
                  }}
                  disabled={googleLoader || loader || renderProps.disabled ? true : false}>
                  {googleLoader ? (
                    <CircularProgress
                      style={{
                        color: 'white',
                        opacity: 0.6,
                        width: '24px',
                        height: '24px'
                      }}
                      disableShrink
                    />
                  ) : (
                    'Google log in'
                  )}
                </Button>
              )}
              onSuccess={googleSuccess}
              onFaliure={() => {
                setGoogleLoader(false);
                setLoader(false);
                googleFaliure();
                alert('coś poszło nie tak, spróbuj ponownie');
              }}
              cookiePolicy="single_host_origin"
            />

            {!loader || !googleLoader ? (
              <Grid container justify="flex-end">
                <Grid item>
                  <Link
                    to="#"
                    variant="body2"
                    onClick={() => {
                      setIsSignUp((val) => !val);
                      setInvalidEmail(false);
                      setAuthFailed(false);
                      setInvalidEmail(false);
                      setInvalidPassword(false);
                      setPasswordsDoNotMatch(false);
                      setAuthForm(initialState);
                    }}>{`${
                    loader || googleLoader
                      ? ''
                      : isSignUp
                      ? 'Already have an account? Sign in'
                      : 'Dont have an account? Sign up'
                  }`}</Link>
                </Grid>
              </Grid>
            ) : null}
          </form>
        </div>
      </Container>
    </>
  );
};

export default Auth;
