import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  buttonWrapper: {
    textAlign: 'right',
    marginBottom: '20px',
    [theme.breakpoints.down(550)]: {
      textAlign: 'center'
    }
  },
  card: {
    margin: '10px'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '1.96rem'
  },
  loaderBackground: {
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'rgb(250,250,250)',
    opacity: 0.4,
    width: '100%',
    height: '100%'
  },
  loaderContainer: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  alert: {
    marginBottom: 10
  }
}));
