import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  dialogContainer: {
    margin: '-20px'
  },
  dialogFile: {
    marginTop: '15px'
  },
  dialogTitle: {
    textAlign: 'center'
  },
  dialogContent: {
    overflow: 'hidden'
  },
  dialogContentText: {
    textAlign: 'center'
  },
  dialogActions: {
    justifyContent: 'center',
    margin: '15px 0'
  },
  dialogButtonClose: {
    marginRight: '5px'
  },
  tableButton: {
    margin: theme.spacing(1)
  },
  tableButtonWrapper: {
    textAlign: 'right',
    marginBottom: '20px',
    [theme.breakpoints.down(550)]: {
      textAlign: 'center'
    }
  },
  tableLoaderBackground: {
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'rgb(250,250,250)',
    opacity: 0.4,
    width: '100%',
    height: '100%'
  },
  tableLoaderContainer: {
    position: 'absolute',
    zIndex: 100,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tableAlert: {
    marginBottom: 10
  }
}));
