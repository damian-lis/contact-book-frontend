import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  titleLink: {
    textDecoration: 'none',
    color: '#fff',
    margin: '0 auto'
  },

  title: {
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

  button: {
    marginLeft: 'auto',
    [theme.breakpoints.down(550)]: {
      fontSize: '12px',
      padding: '3px 5px'
    }
  }
}));
