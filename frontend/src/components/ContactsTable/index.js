import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Card } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import MaterialTable from 'material-table';
import { deleteContacts, deleteContact } from 'actions/contacts.actions';
import Alert from '@material-ui/lab/Alert';
import Loader from 'components/Loader';
import CloseIcon from '@material-ui/icons/Close';
import ContactsContext from 'contexts/contacts.context';
import SelectedImage from 'components/SelectedImage';
import EditDeleteBtn from 'components/EditDeleteBtn';
import useStyles from './styles';

const ContactTable = () => {
  const {
    setCurrentId,
    setDeleteContactAlert,
    setDeleteContactsAlert,
    showAlert,
    setShowAlert,
    setOpen,
    setEditVariant
  } = useContext(ContactsContext.store);

  const { userInfo } = useSelector((state) => state.auth);
  const { list, message, error, loading } = useSelector((state) => state.contacts);

  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleDeleteContacts = (ids) => {
    dispatch(deleteContacts(ids));
    setShowAlert(true);
    setDeleteContactsAlert(true);
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
    setShowAlert(true);
    setDeleteContactAlert(true);
  };

  const handleButtonAlertClick = () => {
    setDeleteContactAlert(false);
    setDeleteContactsAlert(false);
    setShowAlert(false);
  };

  const handleOpen = ({ editVariant } = false) => {
    setOpen(true);
    editVariant && setEditVariant(true);
  };

  useEffect(() => {
    error && setShowAlert(true);

    if (!userInfo) return history.push('/');
  }, [userInfo, history, error]);

  return (
    <>
      {!loading && showAlert && (
        <Alert
          action={
            <Button onClick={handleButtonAlertClick} color="inherit">
              <CloseIcon />
            </Button>
          }
          severity={error ? 'error' : 'success'}>
          {message}
        </Alert>
      )}
      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={handleOpen}>
          Add Contact
        </Button>
      </div>
      <div style={{ position: 'relative' }}>
        {loading && (
          <div>
            <div className={classes.loaderBackground}></div>
            <div className={classes.loaderContainer}>
              <Loader type="tableLoader" />
            </div>
          </div>
        )}

        <Card>
          <MaterialTable
            title="Contact Details"
            columns={[
              {
                title: 'Image',
                field: 'selectedImage',
                render: SelectedImage
              },
              { title: 'Name', field: 'name' },
              { title: 'Email', field: 'email' },
              { title: 'Phone number', field: 'phoneNumber' },
              { title: 'Address', field: 'address' },
              {
                title: 'Edit/Delete',
                field: 'edit',
                render: (rowData) =>
                  EditDeleteBtn({ rowData, handleDeleteContact, handleOpen, setCurrentId })
              }
            ]}
            data={list || []}
            localization={{
              body: {
                emptyDataSourceMessage: loading ? null : list ? (
                  <h2>No records to display</h2>
                ) : null
              }
            }}
            actions={[
              {
                tooltip: 'Remove All Selected Contacts',
                icon: 'delete',
                onClick: (evt, data) => handleDeleteContacts(data.map((contact) => contact._id))
              }
            ]}
            options={{
              actionsColumnIndex: -1,
              exportButton: true,
              selection: true
            }}
          />
        </Card>
      </div>
    </>
  );
};

export default ContactTable;
