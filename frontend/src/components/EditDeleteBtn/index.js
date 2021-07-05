import { IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const EditDeleteBtn = ({ rowData, setCurrentId, handleOpen, handleDeleteContact }) => {
  return (
    rowData && (
      <>
        <IconButton
          onClick={() => {
            setCurrentId(rowData._id);
            handleOpen({ editVariant: true });
          }}
          color="primary">
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
    )
  );
};

export default EditDeleteBtn;
