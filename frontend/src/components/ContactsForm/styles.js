import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  dialog: {
    margin: '-20px'
  },
  file: {
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
  buttonClose: {
    marginRight: '5px'
  }
}));
