const contactValidation = ({ contactData, setContactData }) => {
  const emailValidationRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isInvalidName = contactData.name === '' || contactData.name.length < 2 ? true : false;

  const isInvalidPhoneNumber =
    contactData.phoneNumber === '' || contactData.phoneNumber.length < 5 ? true : false;

  const isInvalidAddress =
    contactData.address === '' || contactData.address.length < 5 ? true : false;

  const isInvalidEmail =
    contactData.email === '' || !emailValidationRegexp.test(String(contactData.email).toLowerCase())
      ? true
      : false;

  setContactData({
    ...contactData,
    invalidName: isInvalidName,
    invalidPhoneNumber: isInvalidPhoneNumber,
    invalidAddress: isInvalidAddress,
    invalidEmail: isInvalidEmail
  });

  if (
    contactData.email === '' ||
    !emailValidationRegexp.test(String(contactData.email).toLowerCase())
  ) {
    return false;
  }

  if (
    contactData.name === '' ||
    contactData.email === '' ||
    contactData.phoneNumber === '' ||
    contactData.address === ''
  ) {
    return false;
  }

  return true;
};

export default contactValidation;
