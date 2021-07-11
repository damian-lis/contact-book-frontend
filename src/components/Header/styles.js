import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  titleLink: {
    textDecoration: 'none',
    color: '#fff',
    margin: '0 auto'
  },

  title: {
    fontSize: 25,
    [theme.breakpoints.down(300)]: {
      fontSize: 20
    }
  },
  name: {
    textAlign: 'left',
    [theme.breakpoints.down(550)]: {
      fontSize: 14
    }
  },
  bar: {
    marginBottom: theme.spacing(3)
  },

  button: {
    marginLeft: 'auto',
    [theme.breakpoints.down(550)]: {
      fontSize: 12
    }
  }
}));
