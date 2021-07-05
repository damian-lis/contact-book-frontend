import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(2),
    backgroundColor: 'white',
    height: 45
  },
  buttonContent: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  buttonText: { marginLeft: 5 },
  buttonImage: { width: 20 },
  circularProgress: {
    color: 'white',
    opacity: 0.6,
    width: '24px',
    height: '24px'
  }
}));
