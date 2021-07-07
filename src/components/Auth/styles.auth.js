import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
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
  submitButton: {
    margin: theme.spacing(3, 0, 2)
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    backgroundColor: 'white',
    height: 45
  },
  googleButtonContent: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  googleButtonText: { marginLeft: 5 },
  googleButtonImage: { width: 20 }
}));
