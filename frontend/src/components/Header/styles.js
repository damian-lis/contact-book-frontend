import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '1.96rem'
  },
  name: {
    textAlign: 'left',
    [theme.breakpoints.down(550)]: {
      fontSize: '16px'
    }
  },
  bar: {
    marginBottom: '20px'
  },

  barFix: {
    width: '100vw',
    marginTop: '-8px',
    marginBottom: '20px',
    marginLeft: '-8px'
  },

  button: {
    marginLeft: 'auto',
    [theme.breakpoints.down(550)]: {
      fontSize: '12px',
      padding: '3px 5px'
    }
  }
}));
