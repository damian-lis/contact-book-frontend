const authValidation = ({ authForm, setAuthForm, type }) => {
  const emailValidationRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const isInvalidFirstName =
    authForm.firstName === '' || authForm.firstName.length < 2 ? true : false;
  const isInvalidLastName = authForm.lastName === '' || authForm.lastName.length < 2 ? true : false;
  const isInvalidPassword = authForm.password === '' || authForm.password.length < 5 ? true : false;
  const isInvalidConfirmPassword = authForm.password !== authForm.confirmPassword ? true : false;
  const isInvalidEmail =
    authForm.email === '' || !emailValidationRegexp.test(String(authForm.email).toLowerCase())
      ? true
      : false;

  setAuthForm({
    ...authForm,
    invalidFirstName: isInvalidFirstName,
    invalidLastName: isInvalidLastName,
    invalidPassword: isInvalidPassword,
    invalidConfirmPassword: isInvalidConfirmPassword,
    invalidEmail: isInvalidEmail
  });

  if (authForm.email === '' || !emailValidationRegexp.test(String(authForm.email).toLowerCase())) {
    return false;
  }

  switch (type) {
    case 'SIGN_IN':
      if (authForm.email === '' || authForm.password === '') return false;
      break;

    case 'SIGN_UP':
      if (
        authForm.firstName === '' ||
        authForm.lastName === '' ||
        authForm.email === '' ||
        authForm.password === '' ||
        authForm.confirmPassword === '' ||
        authForm.password !== authForm.confirmPassword
      )
        return false;
      break;

    default:
      break;
  }

  return true;
};

export default authValidation;
