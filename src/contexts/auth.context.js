import React, { createContext, useState } from 'react';
import { initialState } from 'data/auth.data';

const store = createContext();
const { Provider: AuthProvider } = store;

function Provider({ children }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [authForm, setAuthForm] = useState(initialState);
  const [loader, setLoader] = useState(false);
  const [googleLoader, setGoogleLoader] = useState(false);
  const [authFailed, setAuthFailed] = useState(false);

  return (
    <AuthProvider
      value={{
        isSignUp,
        setIsSignUp,
        authForm,
        setAuthForm,
        loader,
        setLoader,
        googleLoader,
        setGoogleLoader,
        authFailed,
        setAuthFailed
      }}>
      {children}
    </AuthProvider>
  );
}

const AuthContext = {
  store,
  Provider
};

export default AuthContext;
