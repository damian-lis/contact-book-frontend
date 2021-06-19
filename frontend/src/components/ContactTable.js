import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MaterialTable from 'material-table';
import { deleteContact } from 'actions/contact.actions';

const EditDeleteBtn = (rowData, handleDeleteContact) =>
  rowData && (
    <>
      <IconButton color="primary">
        <EditIcon />
      </IconButton>
      <IconButton
        color="secondary"
        onClick={() => {
          handleDeleteContact(rowData._id);
        }}>
        <DeleteIcon />
      </IconButton>
    </>
  );

const SelectedImage = (rowData) => (
  <img alt="Userimage" style={{ height: 36, borderRadius: '50%' }} src={rowData.selectedImage} />
);

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1)
  },
  card: {
    margin: '10px'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '1.96rem'
  }
}));

const ContactTable = ({ handleOpen }) => {
  const classes = useStyles();
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div style={{ textAlign: 'right' }}>
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
            { title: 'Phone No', field: 'phoneNo1' },
            { title: 'Alt Phone No', field: 'phoneNo2' },
            { title: 'Address', field: 'address' },
            {
              title: 'Edit/Delete',
              field: 'edit',
              render: (rowData) => EditDeleteBtn(rowData, handleDeleteContact)
            }
          ]}
          data={contacts}
          actions={[
            {
              tooltip: 'Remove All Selected Contacts',
              icon: 'delete'
            }
          ]}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
            selection: true
          }}
        />
      </Card>
    </>
  );
};

export default ContactTable;
