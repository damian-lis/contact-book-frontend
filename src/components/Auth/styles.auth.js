import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatarContainer: {
    marginBottom: theme.spacing(2)
  },
  avatar: {
    margin: `${theme.spacing(1)}px auto`,
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
  googleButtonText: { marginLeft: theme.spacing(1) },
  googleButtonImage: { width: 20 },
  linksContainer: { justifyContent: 'space-between', marginBottom: theme.spacing(5) },
  linkContainer: { marginBottom: theme.spacing(2) }
}));
