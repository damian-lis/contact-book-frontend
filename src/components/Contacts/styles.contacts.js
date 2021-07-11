import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  dialogFile: {
    marginTop: theme.spacing(2)
  },
  dialogTitle: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(-2)
  },
  dialogContent: {
    overflow: 'hidden'
  },
  dialogContentText: {
    textAlign: 'center'
  },
  dialogActions: {
    justifyContent: 'center',
    margin: `${theme.spacing(2)}px 0`
  },
  dialogButtonClose: {
    marginRight: theme.spacing(1)
  },
  tableButton: {
    margin: theme.spacing(1)
  },
  tableButtonWrapper: {
    textAlign: 'right',
    marginBottom: theme.spacing(3),
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
    marginBottom: theme.spacing(2)
  }
}));
