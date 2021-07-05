import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthAvatar from 'components/AuthAvatar';
import AuthForm from 'components/AuthForm';
import AuthContainer from 'components/AuthContainer';
import AuthGoogle from 'components/AuthGoogle';

const Auth = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    userInfo && history.push('/contact');
  }, [userInfo, history]);

  return (
    <AuthContainer>
      <AuthAvatar />
      <AuthForm>
        <AuthGoogle />
      </AuthForm>
    </AuthContainer>
  );
};

export default Auth;
