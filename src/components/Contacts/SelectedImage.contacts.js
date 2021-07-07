const SelectedImage = (rowData) => {
  return (
    <img
      alt="Userimage"
      style={{ height: 36, width: 36, borderRadius: '50%' }}
      src={rowData.selectedImage}
    />
  );
};

export default SelectedImage;
